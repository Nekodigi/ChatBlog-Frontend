import Link from 'next/link';

export default function Note({ note }) {//{ posts }

    var message = <div className={`noteCard ${note.type}`}><p>{note.message}</p></div>;
    if(note.url !== undefined){
        message = <Link href={note.url} className={`noteCard ${note.type}`}><p>{note.message}</p></Link>;
    }

    return (
        message
    );
}
