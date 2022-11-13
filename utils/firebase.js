
export const projectDomain = () => {
    return process.env.NEXT_PUBLIC_PROJECT_ID + ".appspot.com";
}

export const imagePathUrl = (path) => {
    return `https://firebasestorage.googleapis.com/v0/b/${projectDomain()}/o/${encodeURIComponent(path)}?alt=media`;
}