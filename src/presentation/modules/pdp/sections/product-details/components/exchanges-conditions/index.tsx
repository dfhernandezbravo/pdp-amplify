import { useState } from 'react';
import { ExchangesLink } from './style';
import Modal from '@components/molecules/modal';

const ExchangesConditions = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ExchangesLink onClick={() => setOpen(true)}>
        Condiciones para cambios y devoluciones
      </ExchangesLink>
      <Modal
        icon={{ onClick: () => setOpen(false) }}
        open={open}
        setOpen={() => setOpen(false)}
      >
        <h1>Política de Devoluciones</h1>
        <h3>
          Política de Devoluciones Ley sobre Protección de los Derechos de los
        </h3>
        <h3>
          <b>Consumidores 1.</b>
        </h3>
        <br />
        <h4>Garantía Mínima Legal</h4>
        <p>
          Si el producto presenta un defecto o falla de fabricación, le faltan
          piezas o partes, o se encuentra en alguna de las otras situaciones que
          conforme a la ley del consumidor dan derecho a garantía legal, si lo
          amerita, será derivado al Servicio Técnico para la verificación y
          certificación de la causa u origen dentro de un plazo de 15 días
          hábiles. De acuerdo con la última actualización de la Ley sobre
          Protección de los Derechos de los Consumidores, el plazo para ejercer
          la Garantía Mínima Legal es la siguiente: a) Las compras que se
          realicen hasta el día 23 de marzo de 2022 tendrán un plazo de 3 (tres)
          meses de garantía mínima legal, desde la recepción del producto; y b)
          Las compras que se realicen a partir del día 24 de marzo de 2022,
          tendrán un plazo de 6 (seis) meses de garantía mínima legal, desde la
          recepción del producto. Si por la naturaleza del defecto o falla y/o
          como consecuencia de la evaluación del producto, se determina que la
          causa del reclamo no es atribuible a una mala manipulación o uso por
          parte del consumidor, este puede elegir entre devolución, cambio o
          reparación del producto. En estos casos, el costo del traslado no se
          cobrará. En caso de que elijas la reparación de tu producto por el
          Servicio Técnico, y posterior a ello, se mantiene la misma falla
          técnica, podrás elegir entre la devolución o cambio de tu producto.
          Puedes llevar tu producto directamente a cualquiera de nuestras
          tiendas, o comunicarte al 600 600 3010 para solicitar información del
          Servicio Técnico, o bien puedes llevarlo directamente al Servicio
          Técnico autorizado para coordinar la evaluación del producto en el
          caso de aplicar la garantía. Para hacer efectiva la garantía, puedes
          presentar cualquier documento que acredite la compra como voucher,
          boleta o factura. Si no tienes alguno de estos documentos, puedes
          pedir un duplicado de la boleta o la factura en la tienda solo
          utilizando tu número de RUT. Los productos refaccionados; o de segunda
          mano (con detalles), no tienen garantía legal conforme al artículo 14
          de la ley 19.496 Sobre Protección de los Derechos de los Consumidores.
          2. Retracto compras on line (Easy.cl) Si compras un producto a través
          de la web (Easy.cl) y luego te arrepientes, tienes un plazo de 10 días
          desde que recibes el producto para ejercer tu derecho a retracto. En
          caso de ejercer el retracto, el Usuario deberá devolver el producto
          sin uso y con todos los elementos originales del embalaje, como
          etiquetas, certificados de garantía, manuales de uso, cajas y/o
          elemento de protección. De acuerdo con las normas de la ley 19.496
          Sobre Protección de los Derechos de los Consumidores, las excepciones
          al derecho de retracto en las compras realizadas en la “plataforma”
          son: Productos que por su naturaleza no pueden ser devueltos, o pueden
          deteriorarse o caducar, tales como, comida para mascotas, plantas.
          Bienes de uso personal, tales como, antiparras, protectores auditivos
          que hayan sido abiertos, zapatos de seguridad, guantes, cascos. Bienes
          confeccionados según indicaciones del Cliente, tales como, cadenas a
          medida, alfombras a medida. Para acreditar la compra puedes presentar
          voucher, boleta o factura. Si no tienes alguno de estos documentos,
          puedes pedir un duplicado de la boleta o la factura en la tienda solo
          utilizando tu número de RUT. Para ejercer tu derecho a retracto, solo
          debes llamar al Call Center teléfono 600 600 3010. La devolución de lo
          pagado se realizará al mismo medio de pago utilizado para la compra,
          con posterioridad a que hayas devuelto el producto. En caso de compras
          con despacho a domicilio, no se devolverá el costo del despacho, es
          decir, sólo se reembolsará el valor pagado por el producto. Puedes
          llevar tu producto directamente a cualquiera de nuestras tiendas, en
          caso de que sea de gran tamaño y de difícil traslado, puedes coordinar
          el retiro desde la misma dirección de entrega original a través de
          Call Center llamando al teléfono 600 600 3010. 3. Retracto compras en
          tienda En caso de comprar un producto de forma presencial en tienda,
          pero que no tuviste acceso directo a él antes de la compra, es decir,
          lo escogiste desde un catálogo, viste solo una muestra o fue un
          producto a pedido, tienes un plazo de 10 días desde que recibiste el
          producto para ejercer tu derecho a retracto. Ten presente que, para
          ejercer el derecho a retracto en compras presenciales, además de lo
          señalado precedentemente, el producto no debe haberse deteriorado por
          razones imputables al Usuario o Cliente, y deberá devolver el producto
          sin uso y con todos los elementos originales del embalaje, como
          etiquetas, certificados de garantía, manuales de uso, cajas y/o
          elemento de protección. Para acreditar la compra puedes presentar
          voucher, boleta o factura. Si no tienes alguno de estos documentos,
          puedes pedir un duplicado de la boleta o la factura en la tienda solo
          utilizando tu número de RUT. Para ejercer tu derecho a retracto, solo
          debes llamar al Call Center teléfono 600 600 3010. La devolución de lo
          pagado se realizará al mismo medio de pago utilizado para la compra,
          con posterioridad a que hayas devuelto el producto. En caso de compras
          con despacho a domicilio, no se devolverá el costo del despacho, es
          decir, sólo se reembolsará el valor pagado por el producto. Garantía
          de Satisfacción En caso de comprar un producto nuevo, sin haberlo
          usado y no estás conforme, puedes solicitar el cambio o la devolución
          dentro de los primeros 60 días corridos desde el retiro del producto
          en tienda o de recibido en la dirección de despacho. En caso de
          solicitar devolución, se devolverá el monto pagado al mismo medio de
          pago utilizado para la compra. En caso de compras con despacho a
          domicilio, no se devolverá el costo del despacho, es decir, sólo se
          reembolsará el valor pagado por el producto. Puedes llevar tu producto
          directamente a cualquiera de nuestras tiendas, en caso de que sea de
          gran tamaño y de difícil traslado, puedes coordinar el retiro desde la
          misma dirección de entrega original a través de Call Center llamando
          al teléfono 600 600 3010. Para hacer efectiva esta garantía, el
          Cliente debe cumplir con las siguientes condiciones: Disponer de la
          boleta o factura, que acredite la compra. Si no tienes alguno de estos
          documentos, puedes pedir un duplicado en la tienda solo utilizando tu
          número de RUT. El producto debe estar en perfecto estado (limpio, sin
          rayas, sin abolladuras, sin manchas, etc.), sin uso y con su embalaje
          original. El producto debe contar con sus etiquetas, manuales, pólizas
          de garantía, accesorios y/o complementos. Excepciones a la Garantía de
          Satisfacción: Productos refaccionados, descontinuados o de segunda
          mano (con detalles). Productos a pedido (fabricados según medidas
          proporcionadas por los clientes, o bien en colores especiales o en
          productos de encargo especial). Productos instalados, dimensionados, o
          para venta volumen. Colchones cuyo empaque haya sido abierto. Con
          respecto a los Duendes Mágicos, tienen un plazo de devolución de 10
          días desde su retiro en Tienda o recepción en la dirección de
          despacho.
        </p>
      </Modal>
    </>
  );
};

export default ExchangesConditions;
