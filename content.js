(() => {
    // Only run on Google search result pages.
    if (location.pathname !== "/search")
        return;

    const url = new URL(location.href);

    // We've already rewritten this search.
    if (url.searchParams.has("_noai"))
        return;

    const query = url.searchParams.get("q");

    if (!query)
        return;

    // Don't append twice if the user intentionally searched for "-ai".
    if (/\s-ai(\s|$)/i.test(query))
        return;

    url.searchParams.set("q", `${query} -ai`);

    // Marker to prevent any possibility of a redirect loop.
    url.searchParams.set("_noai", "1");

    location.replace(url.toString());
})();
