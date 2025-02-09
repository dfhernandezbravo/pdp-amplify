import { useState } from 'react';
import { TermsLink, TermsList } from './styles';
import Modal from '@components/molecules/modal';

const ServiceTerms = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TermsLink
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
      >
        ¿En que consiste?
      </TermsLink>
      <Modal
        title="Condiciones del Servicio"
        icon={{ onClick: () => setOpen(false) }}
        open={open}
        setOpen={setOpen}
      >
        <TermsList>
          <li>
            Todos los servicios serán coordinados en un plazo de 72 horas
            hábiles, posteriores al pago. Los servicios se encuentran sujetos a
            confirmación de cobertura según la comuna y servicio contratado.
          </li>
          <li>
            El Cliente declara conocer y aceptar, que Easy realizará la
            instalación sólo de productos adquiridos en EASY (Tiendas Easy e
            Easy.cl).
          </li>
          <li>
            Todos los productos para armar o instalar deben estar en las mismas
            condiciones en que fueron recibidos para ser revisados con nuestros
            técnicos.
          </li>
          <li>
            El cliente debe dejar desocupado el espacio, donde se realizarán los
            servicios de instalación.
          </li>
          <li>
            Si el producto para armar o instalar requiere de adecuaciones o
            modificaciones o adicionar nuevos trabajos en la instalación ya
            contratada, deberá requerir un presupuesto, el cual deberá ser
            pagado en Tienda.
          </li>
          <li>
            No está permitido realizar pagos directos a los instaladores.
            Cualquier pago que realice deberá ser efectuado directamente en las
            tiendas Easy.
          </li>
          <li>
            La fecha de inicio de éstos será definida de acuerdo a la
            disponibilidad de los proveedores, así como de los productos
            adquiridos asociados a los servicios contratados.
          </li>
        </TermsList>
      </Modal>
    </>
  );
};

export default ServiceTerms;
