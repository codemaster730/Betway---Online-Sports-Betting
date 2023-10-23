import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Axios from 'axios';

const RouteGuard = ({ children } : any) => {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        // on initial load - run auth check 
        authCheck( router.asPath );

        // on route change start - hide page content by setting authorized to false  
        const hideContent = () => setAuthorized(false);
        router.events.on('routeChangeStart', hideContent);

        // on route change complete - run auth check 
        router.events.on('routeChangeComplete', authCheck)

        // unsubscribe from events in useEffect return function
        return () => {
            router.events.off('routeChangeStart', hideContent);
            router.events.off('routeChangeComplete', authCheck);
        }

    }, []);

    const authCheck = (url: any) => {
        // redirect to login page if accessing a private page and not logged in 
        let token = localStorage.getItem("auth-token");
        if(sessionStorage.getItem("auth-token") != null) token = sessionStorage.getItem("auth-token");
        if(token == null) {
          localStorage.setItem("auth-token", "");
          token = "";
        }
        Axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
        
        const publicPaths = ['/login'];
        const path = url.split('?')[0];

        if(token == "" && !publicPaths.includes(path)) {
          setAuthorized(false);
          router.push('/login');
        }
        else if(token != "" && publicPaths.includes(path)) {
          setAuthorized(false);
          router.push('/');
        }
        else {
          setAuthorized(true);
        }
    }

    return (authorized && children);
}
export default RouteGuard;