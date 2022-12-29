import cookie from "react-cookies";

const setCookie = (name: string, value: string) => {
    const isLocalHostOrIp =
        window.location.hostname === "localhost" ||
        !window.location.hostname.match(/[0-9]*\.[0-9]*\.[0-9]*\.[0-9]*/);

    const domain = isLocalHostOrIp
        ? window.location.hostname
        : window.location.hostname.slice(
              window.location.hostname.lastIndexOf(
                  ".",
                  window.location.hostname.length - 5
              ) + 1
          );

    cookie.save(name, value, { domain });
};

const getCookie = (name: string) => {
    return cookie.load(name);
};

const removeCookie = (name: string) => {
    return cookie.remove(name);
};

const removeAllCookie = (name: string) => {
    return Object.keys(cookie.loadAll()).map((name) => cookie.remove(name));
};

export { setCookie, getCookie, removeCookie, removeAllCookie };
