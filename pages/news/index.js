import { Fragment } from "react";
import Link from "next/link";

const Newspage =() => {
    return (
        <Fragment>
        <h2>The News Page</h2> 
        <ul>
            <li>
                <Link href='/news/the-1st-news'>The 1st News</Link>
            </li>
            <li>
                <Link href='/news/the-2nd-news'>The 2nd News</Link>
            </li>
        </ul>
        </Fragment>
    )
}

export default Newspage;