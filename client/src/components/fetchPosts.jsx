
// {queryKey} for params with react query
const fetchPosts = async () => {
    // const id = queryKey[1];

    const apiRes = await fetch(`/api/posts`);

    if (!apiRes.ok){
        throw new Error(`error in fetch posts, not ok`)
    }

    return apiRes.json();
}

export default fetchPosts; 