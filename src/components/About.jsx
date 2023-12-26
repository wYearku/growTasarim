import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="lg:w-[80%] mx-auto py-10 px-2">
      <h2 className="border-b-2 border-white pb-2 mb-10 text-5xl">
        Hakkımızda
      </h2>
      <Image
        src={"https://soft-cocada-675207.netlify.app/images/about.png"}
        width={100000}
        height={100000}
        className="!w-full h-96 object-cover"
      />
      <p className="indent-10 text-justify mt-5 text-lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus
        harum enim illum veniam, labore ipsum dolor, aspernatur et maxime velit
        aut cumque neque dolorum sit commodi ducimus esse minus impedit
        blanditiis possimus accusamus architecto sint! Deleniti voluptatum illum
        aut ipsum optio harum esse facilis? Corrupti optio ducimus saepe
        repellendus laborum nemo molestiae eius, veniam cumque odit, nisi
        aliquid sit cum iusto deleniti velit omnis aut soluta, a modi! Minima
        quae odit, ipsa magni delectus repudiandae sed officia iusto id et
        magnam. Assumenda iste sapiente commodi, atque incidunt maxime vel
        explicabo quod soluta suscipit natus laboriosam magni laborum dicta,
        omnis tempora sequi dolorum minima ipsa possimus ullam nam impedit
        quidem voluptas. Est quos nisi minus ipsa quaerat. Neque impedit
        corrupti nihil exercitationem dicta quam sit, illum modi qui accusantium
        minus dignissimos dolores ratione praesentium, ipsam ab voluptate
        doloremque dolorem aspernatur alias, iste velit. Alias excepturi
        reiciendis aliquam similique laudantium, amet quidem voluptatem tempora
        dicta atque ipsa repellendus perferendis corporis. Iusto, vitae,
        reprehenderit rem repudiandae quod quo ipsum, inventore saepe architecto
        consequuntur non eum molestiae natus excepturi nisi vero labore nemo
        molestias! Ut corporis, voluptatem esse ad quam cum accusamus magni
        voluptatum illum quos! Recusandae commodi soluta vero laborum,
        voluptatem obcaecati possimus!
      </p>
    </div>
  );
};

export default About;
