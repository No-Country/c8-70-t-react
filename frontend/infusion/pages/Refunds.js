import Image from "next/image";
import React from "react";
import LayoutMargin from "../components/LayoutMargin";

export default function Refunds() {
  return (
    <div className="my-5 py-5">
      <div className="d-flex px-4 pt-3 ms-4">
        <p className="">Inicio</p>
        <p className="fw-bolder">/Reembolsos</p>
      </div>
      <LayoutMargin>
        <div className="bg-light container-fluid pb-5">
          <h3 className=" fw-bold pt-5 text-center">Contactanos</h3>
          <h2 style={{ textAlign: "center" }}>
            <strong>Infusion tienda</strong> Pol&iacute;tica de Reembolso
          </h2>

          <p style={{ textAlign: "center" }}>
            <strong>Gracias por comprar en Infusion tienda!</strong>
          </p>

          <div className="p-3 d-flex justify-content-center">
            <ul>
              <li>
                Ofrecemos reembolso y/o cambio dentro de los primeros 30
                d&iacute;as de tu compra. Si han transcurrido 30 d&iacute;as
                desde tu compra, no se te ofrecer&aacute; un reembolso y/o
                cambio de ning&uacute;n tipo. Elegibilidad para reembolsos y
                cambios Tu art&iacute;culo debe estar sin usar y en las mismas
                condiciones en que lo recibi&oacute;. El art&iacute;culo debe
                estar en el embalaje original. Para completar tu
                devoluci&oacute;n, requerimos un recibo o comprobante de compra.
              </li>
              <li>
                Solo se pueden reembolsar los art&iacute;culos de precio
                regular; los art&iacute;culos de venta no se pueden reembolsar.
                Si el art&iacute;culo en cuesti&oacute;n fue marcado como un
                regalo cuando fue comprado y se envi&oacute; directamente a ti,
                recibir&aacute;s un cr&eacute;dito de regalo por el valor de tu
                devoluci&oacute;n. Cambios (si es aplicable) Solo reemplazamos
                los art&iacute;culos si est&aacute;n defectuosos o
                da&ntilde;ados. Si necesitas cambiarlo por el mismo
                art&iacute;culo, env&iacute;anos un email a (Agrega
                direcci&oacute;n de correo electr&oacute;nico relevante) y
                env&iacute;a tu art&iacute;culo a: (Direcci&oacute;n relevante).
              </li>
              <li>
                Bienes Exentos Los siguientes bienes est&aacute;n exentos de
                reembolsos: Tarjetas de regalo (gif cards). Algunos
                art&iacute;culos de salud y cuidado personal. Partial refunds
                are granted (si es aplicable) Cualquier art&iacute;culo que no
                se encuentre en su estado original, est&eacute; da&ntilde;ado o
                falte una parte por razones que no se debieron a nuestro error.
                Cualquier art&iacute;culo que se devuelva m&aacute;s de 30
                d&iacute;as despu&eacute;s de la entrega. Una vez que se reciba
                e inspeccione tu devoluci&oacute;n, te enviaremos un email para
                notificarte que hemos recibido tu art&iacute;culo devuelto.
                Tambi&eacute;n te notificaremos la aprobaci&oacute;n o el
                rechazo de tu reembolso. Si es aprobado, entonces se
                procesar&aacute; tu reembolso y se aplicar&aacute; un
                cr&eacute;dito autom&aacute;ticamente a tu tarjeta de
                cr&eacute;dito o m&eacute;todo de pago original, dentro de una
                cierta cantidad de d&iacute;as. Reembolsos atrasados ​​o
                faltantes Si a&uacute;n no has recibido un reembolso, primero
                verifica otra vez tu cuenta bancaria. Luego, comun&iacute;cate
                con la compa&ntilde;&iacute;a de tu tarjeta de cr&eacute;dito.
                Puede tomar alg&uacute;n tiempo antes de que se publique
                oficialmente tu reembolso. Si has hecho todo esto y a&uacute;n
                no has recibido tu reembolso, comun&iacute;cate con nosotros al
                (email y/o n&uacute;mero de tel&eacute;fono). Env&iacute;o Por
                favor, no devuelvas el producto al fabricante. Debe enviarse a
                la siguiente direcci&oacute;n (direcci&oacute;n relevante).
              </li>
              <li>
                Usted ser&aacute; responsable de pagar sus propios costos de
                env&iacute;o para devolver su art&iacute;culo. Los costos de
                env&iacute;o no son reembolsables. Si recibes un reembolso, el
                costo del env&iacute;o de devoluci&oacute;n se deducir&aacute;
                de tu reembolso. Dependiendo de d&oacute;nde vivas, el tiempo
                que tarde tu producto cambiado en llegar a ti puede variar. Por
                favor, nota que no podemos garantizar que recibiremos tu
                art&iacute;culo devuelto.
              </li>
            </ul>
          </div>
        </div>
      </LayoutMargin>
    </div>
  );
}
