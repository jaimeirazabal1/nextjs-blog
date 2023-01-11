import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';
import Alert from '../../components/Alert';

export default function FirstPost() {
    return (
    <Layout>
        <Head>
          <title>First Post</title>
          <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                console.log(`script loaded correctly, window.FB has been populated`)
                }
            />
        </Head>
        <Alert type="success">Introducción a mi experiencia como Desarrollador Full-Stack</Alert>
<p>Mi nombre es [tu nombre], soy un desarrollador full-stack con experiencia en el desarrollo de aplicaciones web utilizando las tecnologías JavaScript y PHP, así como en el manejo de bases de datos MySQL, PostgreSQL y MongoDB.</p>
<h2>Habilidades en JavaScript</h2>
<p>Mi habilidad en JavaScript me permite desarrollar tanto en el lado del cliente como en el lado del servidor, utilizando librerías y frameworks como:</p>
<ul>
    <li>React: una librería de JavaScript para construir interfaces de usuario.</li>
    <li>Vue.js: otra librería de JavaScript popular para construir aplicaciones web interactivas.</li>
    <li>AngularJS: un marco de desarrollo web para construir aplicaciones de una sola página.</li>
</ul>
<p>Con estas herramientas, puedo crear aplicaciones interactivas y ricas en contenido, que ofrecen una experiencia de usuario fluida y satisfactoria.</p>
<h2>Habilidades en PHP</h2>
<p>En PHP, utilizo frameworks como Laravel y Symphony, junto con el administrador de dependencias Composer, para crear soluciones escalables y robustas en el lado del servidor. Estos frameworks proporcionan herramientas y patrones que me permiten construir aplicaciones complejas y escalables, mientras que el administrador de dependencias me permite agregar y gestionar librerías y paquetes en mi proyecto.</p>
<h2>Experiencia en manejo de bases de datos</h2>
<p>
Además de mi experiencia en JavaScript y PHP, también tengo experiencia en el uso de diferentes bases de datos, como MySQL, PostgreSQL y MongoDB, para almacenar y recuperar información. MySQL es un sistema de gestión de bases de datos relacionales muy utilizado en el desarrollo web, PostgreSQL es otro popular sistema de bases de datos relacional open-source y MongoDB es una base de datos NoSQL que es adecuada para aplicaciones con alto rendimiento y escalabilidad.
</p>
<h2>Constantemente me mantengo actualizado</h2>
<p>Me mantengo constantemente actualizado con las últimas tendencias y tecnologías en el mundo de desarrollo web para poder ofrecer soluciones innovadoras y de vanguardia a mis clientes.</p>
       
      </Layout>
    );
  }