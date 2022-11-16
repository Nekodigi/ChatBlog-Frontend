
export const projectDomain = () => {
    return process.env.NEXT_PUBLIC_PROJECT_ID + ".appspot.com";
}

export const imagePathUrl = (path) => {
    return `https://storage.googleapis.com/${projectDomain()}/${encodeURIComponent(path)}`;
}