import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Mi nombre es [tu nombre], soy un desarrollador full-stack con experiencia en el desarrollo de aplicaciones web utilizando las tecnologías JavaScript y PHP. Mi habilidad en JavaScript me permite desarrollar tanto en el lado del cliente como en el lado del servidor, utilizando librerías y frameworks como React, Vue.js y AngularJS para crear aplicaciones interactivas y ricas en contenido.
Por otro lado, en PHP trabajo con frameworks como Laravel, Symphony y el administrador de dependencias Composer, para crear soluciones escalables y robustas en el lado del servidor. Además, manejo bases de datos como MySQL, PostgreSQL y MongoDB. Me mantengo actualizado con las últimas tendencias y tecnologías en el mundo de desarrollo web para poder ofrecer soluciones innovadoras y de vanguardia a mis clientes.</p>
        <p className={utilStyles.center}>
          <Link href="posts/first-post">Mi primer post</Link>.
        </p>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
      </section>
    </Layout>
  );
}

