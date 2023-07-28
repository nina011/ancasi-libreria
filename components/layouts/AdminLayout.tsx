import { FC } from "react";
import Head from "next/head"

import { /*Navbar,*/ Navbar, SideMenu  } from "../ui";

interface Props {
    children: React.ReactNode
    title: string;
    subTitle: string;
    pageDescription?: string;
    imageFullUrl?: string;
    icon?: React.ReactNode;
}

export const AdminLayout: FC<Props> = ({ children, title, pageDescription, imageFullUrl, subTitle }) => {
  return (
    <>
        <Head>

            <title>{title}</title>
            <title>{subTitle}</title>
            <meta 
                name='title'
                content={ title }
            />

            <meta 
                name='subtitle'
                content={ subTitle }
            />

            <meta 
                name='og:title'
                content={ title }
            />

            <meta 
                name='og:description'
                content={ pageDescription }
            />
            <meta 
                name='og:subtitle'
                content={ subTitle }
            />

            {
                imageFullUrl && (
                    <meta name="og:name" content={ imageFullUrl } />
                )
            }

        </Head>

        <nav>
            <Navbar />
        </nav>

        <SideMenu />


        <main style={{
            margin: '80px auto',
            maxWidth: '1440px',
            padding: '0px 30px',
        }}>
            { children }
        </main>

        <footer>
            {/* TODO custom footer */}
        </footer>
    </>
  )
}