import Image from "next/image";
import React from "react";
import LayoutMargin from "../components/LayoutMargin";

export default function About() {
  return (
    <div className="my-5 py-5">
      <div className="d-flex px-4 pt-3 ms-4">
        <p className="">Inicio</p>
        <p className="fw-bolder">/Sobre Nosotros</p>
      </div>
      <LayoutMargin>
        <div className="bg-light container-fluid pb-5" >
          <h3 className=" fw-bold pt-5 text-center">Sobre nosotros</h3>
          Dolor non sint amet esse eiusmod nostrud pariatur ipsum. Exercitation irure incididunt incididunt deserunt eiusmod quis deserunt Lorem anim labore incididunt ea tempor. Ut non quis ipsum est fugiat sit minim incididunt ullamco voluptate mollit enim pariatur. Nisi sit ut nisi amet ea.
          Dolor non sint amet esse eiusmod nostrud pariatur ipsum. Exercitation irure incididunt incididunt deserunt eiusmod quis deserunt Lorem anim labore incididunt ea tempor. Ut non quis ipsum est fugiat sit minim incididunt ullamco voluptate mollit enim pariatur. Nisi sit ut nisi amet ea.
          Dolor non sint amet esse eiusmod nostrud pariatur ipsum. Exercitation irure incididunt incididunt deserunt eiusmod quis deserunt Lorem anim labore incididunt ea tempor. Ut non quis ipsum est fugiat sit minim incididunt ullamco voluptate mollit enim pariatur. Nisi sit ut nisi amet ea.
          Dolor non sint amet esse eiusmod nostrud pariatur ipsum. Exercitation irure incididunt incididunt deserunt eiusmod quis deserunt Lorem anim labore incididunt ea tempor. Ut non quis ipsum est fugiat sit minim incididunt ullamco voluptate mollit enim pariatur. Nisi sit ut nisi amet ea.
          <div className="p-3 d-flex justify-content-center">
          <Image src={'/categoria2.jpg'} width={400} height={300} />

          </div>
          Dolor non sint amet esse eiusmod nostrud pariatur ipsum. Exercitation irure incididunt incididunt deserunt eiusmod quis deserunt Lorem anim labore incididunt ea tempor. Ut non quis ipsum est fugiat sit minim incididunt ullamco voluptate mollit enim pariatur. Nisi sit ut nisi amet ea.
          Dolor non sint amet esse eiusmod nostrud pariatur ipsum. Exercitation irure incididunt incididunt deserunt eiusmod quis deserunt Lorem anim labore incididunt ea tempor. Ut non quis ipsum est fugiat sit minim incididunt ullamco voluptate mollit enim pariatur. Nisi sit ut nisi amet ea.
          Dolor non sint amet esse eiusmod nostrud pariatur ipsum. Exercitation irure incididunt incididunt deserunt eiusmod quis deserunt Lorem anim labore incididunt ea tempor. Ut non quis ipsum est fugiat sit minim incididunt ullamco voluptate mollit enim pariatur. Nisi sit ut nisi amet ea.
        </div>
      </LayoutMargin>
    </div>
  );
}
