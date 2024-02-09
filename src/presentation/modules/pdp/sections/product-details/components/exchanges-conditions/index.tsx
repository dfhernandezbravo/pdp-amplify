/* eslint-disable max-lines */

import { useState } from 'react';
import {
  ExchangesLink,
  Paragraph,
  Subtitle,
  Title,
  TitleSection,
} from './style';
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
        <Title>Política de Devoluciones</Title>
        <Subtitle>
          Política de Devoluciones Ley sobre Protección de los Derechos de los
        </Subtitle>
        <h3>
          <b>Consumidores 1.</b>
        </h3>
        <TitleSection>Garantía Mínima Legal</TitleSection>
        <Paragraph>
          Si el producto presenta un defecto o falla de fabricación, le faltan
          piezas o partes, o se encuentra en alguna de las otras situaciones que
          conforme a la ley del consumidor dan derecho a garantía legal, si lo
          amerita, será derivado al Servicio Técnico para la verificación y
          certificación de la causa u origen dentro de un plazo de 15 días
          hábiles.
        </Paragraph>
        <Paragraph>
          De acuerdo con la última actualización de la Ley sobre Protección de
          los Derechos de los Consumidores, el plazo para ejercer la Garantía
          Mínima Legal es la siguiente:
        </Paragraph>
        <Paragraph>
          a) Las compras que se realicen
          <b>hasta el día 23 de marzo de 2022 </b>
          tendrán un plazo de <b>3 (tres) meses </b>de garantía mínima legal,
          desde la recepción del producto; y
        </Paragraph>
        <Paragraph>
          b) Las compras que se realicen
          <b>a partir del día 24 de marzo de 2022,</b>tendrán un plazo de
          <b>6 (seis) meses </b>de garantía mínima legal, desde la recepción del
          producto.
        </Paragraph>
        <Paragraph>
          Si por la naturaleza del defecto o falla y/o como consecuencia de la
          evaluación del producto, se determina que la causa del reclamo no es
          atribuible a una mala manipulación o uso por parte del consumidor,
          este puede elegir entre devolución, cambio o reparación del producto.
          En estos casos, el costo del traslado no se cobrará.
        </Paragraph>
        <Paragraph>
          En caso de que elijas la reparación de tu producto por el Servicio
          Técnico, y posterior a ello, se mantiene la misma falla técnica,
          podrás elegir entre la devolución o cambio de tu producto.
        </Paragraph>
        <Paragraph>
          Puedes llevar tu producto directamente a cualquiera de nuestras
          tiendas, o comunicarte al 600 600 3010 para solicitar información del
          Servicio Técnico, o bien puedes llevarlo directamente al Servicio
          Técnico autorizado para coordinar la evaluación del producto en el
          caso de aplicar la garantía.
        </Paragraph>
        <Paragraph>
          Para hacer efectiva la garantía, puedes presentar cualquier documento
          que acredite la compra como voucher, boleta o factura. Si no tienes
          alguno de estos documentos, puedes pedir un duplicado de la boleta o
          la factura en la tienda solo utilizando tu número de RUT.
        </Paragraph>
        <Paragraph>
          Los productos refaccionados; o de segunda mano (con detalles), no
          tienen garantía legal conforme al artículo 14 de la ley 19.496 Sobre
          Protección de los Derechos de los Consumidores.
        </Paragraph>
        <TitleSection>2. Retracto compras on line (Easy.cl)</TitleSection>
        <Paragraph>
          Si compras un producto a través de la web (Easy.cl) y luego te
          arrepientes, tienes un plazo de <b>10 días </b>desde que recibes el
          producto para ejercer tu derecho a retracto.
        </Paragraph>
        <Paragraph>
          En caso de ejercer el retracto, el Usuario deberá devolver el producto
          sin uso y con todos los elementos originales del embalaje, como
          etiquetas, certificados de garantía, manuales de uso, cajas y/o
          elemento de protección.
        </Paragraph>
        <Paragraph>
          De acuerdo con las normas de la ley 19.496 Sobre Protección de los
          Derechos de los Consumidores, las excepciones al derecho de retracto
          en las compras realizadas en la “plataforma” son:
        </Paragraph>
        <ul>
          <li>
            <Paragraph>
              Productos que por su naturaleza no pueden ser devueltos, o pueden
              deteriorarse o caducar, tales como, comida para mascotas, plantas.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              Bienes de uso personal, tales como, antiparras, protectores
              auditivos que hayan sido abiertos, zapatos de seguridad, guantes,
              cascos.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              Bienes confeccionados según indicaciones del Cliente, tales como,
              cadenas a medida, alfombras a medida.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              Para acreditar la compra puedes presentar voucher, boleta o
              factura. Si no tienes alguno de estos documentos, puedes pedir un
              duplicado de la boleta o la factura en la tienda solo utilizando
              tu número de RUT.
            </Paragraph>
            <Paragraph>
              Para ejercer tu derecho a retracto, solo debes llamar al Call
              Center teléfono 600 600 3010.
            </Paragraph>
            <Paragraph>
              La devolución de lo pagado se realizará al mismo medio de pago
              utilizado para la compra, con posterioridad a que hayas devuelto
              el producto. En caso de compras con despacho a domicilio, no se
              devolverá el costo del despacho, es decir, sólo se reembolsará el
              valor pagado por el producto.
            </Paragraph>
            <Paragraph>
              Puedes llevar tu producto directamente a cualquiera de nuestras
              tiendas, en caso de que sea de gran tamaño y de difícil traslado,
              puedes coordinar el retiro desde la misma dirección de entrega
              original a través de Call Center llamando al teléfono 600 600
              3010.
            </Paragraph>
          </li>
        </ul>

        <TitleSection>3. Retracto compras en tienda</TitleSection>
        <Paragraph>
          En caso de comprar un producto de forma presencial en tienda, pero que
          no tuviste acceso directo a él antes de la compra, es decir, lo
          escogiste desde un catálogo, viste solo una muestra o fue un producto
          a pedido, tienes un plazo de 10 días desde que recibiste el producto
          para ejercer tu derecho a retracto.
        </Paragraph>
        <Paragraph>
          Ten presente que, para ejercer el derecho a retracto en compras
          presenciales, además de lo señalado precedentemente, el producto no
          debe haberse deteriorado por razones imputables al Usuario o Cliente,
          y deberá devolver el producto sin uso y con todos los elementos
          originales del embalaje, como etiquetas, certificados de garantía,
          manuales de uso, cajas y/o elemento de protección.
        </Paragraph>
        <Paragraph>
          Para acreditar la compra puedes presentar voucher, boleta o factura.
          Si no tienes alguno de estos documentos, puedes pedir un duplicado de
          la boleta o la factura en la tienda solo utilizando tu número de RUT.
        </Paragraph>
        <Paragraph>
          Para ejercer tu derecho a retracto, solo debes llamar al Call Center
          teléfono 600 600 3010.
        </Paragraph>
        <Paragraph>
          La devolución de lo pagado se realizará al mismo medio de pago
          utilizado para la compra, con posterioridad a que hayas devuelto el
          producto. En caso de compras con despacho a domicilio, no se devolverá
          el costo del despacho, es decir, sólo se reembolsará el valor pagado
          por el producto.
        </Paragraph>
        <TitleSection>Garantía de Satisfacción</TitleSection>
        <Paragraph>
          En caso de comprar un producto nuevo, sin haberlo usado y no estás
          conforme, puedes solicitar el cambio o la devolución dentro de los
          primeros <b>60 días </b>corridos desde el retiro del producto en
          tienda o de recibido en la dirección de despacho. En caso de solicitar
          devolución, se devolverá el monto pagado al mismo medio de pago
          utilizado para la compra. En caso de compras con despacho a domicilio,
          no se devolverá el costo del despacho, es decir, sólo se reembolsará
          el valor pagado por el producto.
        </Paragraph>
        <Paragraph>
          Puedes llevar tu producto directamente a cualquiera de nuestras
          tiendas, en caso de que sea de gran tamaño y de difícil traslado,
          puedes coordinar el retiro desde la misma dirección de entrega
          original a través de Call Center llamando al teléfono 600 600 3010.
        </Paragraph>
        <Paragraph>
          Para hacer efectiva esta garantía, el Cliente debe cumplir con las
          siguientes condiciones:
        </Paragraph>

        <ul>
          <li>
            <Paragraph>
              Disponer de la boleta o factura, que acredite la compra. Si no
              tienes alguno de estos documentos, puedes pedir un duplicado en la
              tienda solo utilizando tu número de RUT.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              El producto debe estar en perfecto estado (limpio, sin rayas, sin
              abolladuras, sin manchas, etc.), sin uso y con su embalaje
              original.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              El producto debe contar con sus etiquetas, manuales, pólizas de
              garantía, accesorios y/o complementos.
            </Paragraph>
            <Paragraph>Excepciones a la Garantía de Satisfacción:</Paragraph>
          </li>
          <li>
            <Paragraph>
              Productos refaccionados, descontinuados o de segunda mano (con
              detalles).
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              Productos a pedido (fabricados según medidas proporcionadas por
              los clientes, o bien en colores especiales o en productos de
              encargo especial).
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              Productos instalados, dimensionados, o para venta volumen.
            </Paragraph>
          </li>
          <li>
            <Paragraph>Colchones cuyo empaque haya sido abierto.</Paragraph>
          </li>
          <li>
            <Paragraph>
              Con respecto a los Duendes Mágicos, tienen un plazo de devolución
              de 10 días desde su retiro en Tienda o recepción en la dirección
              de despacho.
            </Paragraph>
          </li>
        </ul>
      </Modal>
    </>
  );
};

export default ExchangesConditions;
