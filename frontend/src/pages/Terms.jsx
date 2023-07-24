import React from 'react'
import Typography from '@mui/material/Typography'

import BackButton from '../components/BackButton'

import '../styles/terms.css'

const Terms = () => {
  return (
    <div className='termsContainer'>
      <BackButton />
      <div className='terms_title'>
        <Typography variant='h4'>Términos y condiciones</Typography>
        <Typography varian='subtitle1'>Fecha de entrada en vigencia: [Viernes 23 de junio de 2023]</Typography>
        <Typography variant='body1'>Lea detenidamente los siguientes términos legales y condiciones de uso. Mediante la utilización de la página https://pocket-pal.web.app/ (en adelante el "Sitio"), usted presta conformidad y queda sujeto a todos los términos, condiciones y avisos que puedan encontrarse en estos Términos Legales y Condiciones de Uso.</Typography>
      </div>
      <div className='content'>
        <Typography variant='h5'>1. Uso de la Aplicación</Typography>
        <ul>
          <li>1.1. La aplicación PocketPal es una billetera virtual que te permite administrar tus transacciones financieras y realizar pagos electrónicos de manera conveniente.</li>
          <li>1.2. Aceptas utilizar la aplicación únicamente para fines legales y de acuerdo con todas las leyes y regulaciones aplicables en tu jurisdicción.</li>
          <li>1.3. Eres responsable de mantener la confidencialidad de tu información de inicio de sesión y de todas las actividades realizadas con tu cuenta.</li>
        </ul>
        <Typography variant='h5'>2. Registro y Cuentas de Usuario</Typography>
        <ul>
          <li>2.1. Eres responsable de proteger tu información de inicio de sesión y de mantenerla confidencial. Si sospechas que tu cuenta ha sido comprometida, debes informar de inmediato al equipo de soporte de PocketPal.</li>
          <li>2.2. Nos reservamos el derecho de suspender o cancelar tu cuenta si se determina que has violado estos términos de uso.</li>
          <li>2.3. Correo Electrónico: Los mensajes de correo electrónico habituales enviados por Internet pueden estar sujetos a posibles intercepciones, pérdidas o alteraciones. De ninguna manera asumimos responsabilidad alguna por ellos, ni tampoco asumimos responsabilidad alguna ante usted u otra persona por daños o problemas de otra índole en relación con mensajes de correo electrónico que usted nos envíe, o envíe a cualquier otro miembro de PocketPal.</li>
        </ul>
        <Typography variant='h5'>3. Uso adecuado de la Aplicación</Typography>
        <ul>
          <li>3.1. Registro de la Cuenta:
            <ul>
              <li>a. Para utilizar la funcionalidad completa de la Aplicación, debes crear una cuenta personal. Al registrarte, te comprometes a proporcionar información veraz, precisa y actualizada. Eres responsable de mantener la confidencialidad de tu cuenta y de todas las actividades realizadas en ella.</li>
              <li>b. No debes utilizar información falsa o fraudulenta al utilizar la Aplicación.</li>
            </ul>
          </li>
          <li>3.2. Eres responsable de proteger tu información de inicio de sesión y de mantenerla confidencial. Si sospechas que tu cuenta ha sido comprometida, debes informar de inmediato al equipo de soporte de PocketPal.</li>
          <li>3.3 Uso autorizado:
            <ul>
              <li>a. Solo puedes utilizar la Aplicación para los fines previstos y de acuerdo con estas Políticas.</li>
              <li>b. No puedes utilizar la Aplicación de manera que interfiera con su funcionamiento, seguridad o disponibilidad.</li>
            </ul>
          </li>
          <li>3.4. Uso Aceptable: Al utilizar la Aplicación, aceptas cumplir con todas las leyes aplicables y te comprometes a no utilizarla con fines ilegales, fraudulentos o no autorizados. No debes utilizar la Aplicación de manera que interfiera o interrumpa su funcionamiento, ni tampoco intentar acceder a información no autorizada.</li>
          <li>3.5. Responsabilidad del Usuario: Eres responsable de todas las actividades realizadas a través de tu cuenta. Nos reservamos el derecho de suspender o cancelar tu cuenta si se detecta un uso indebido de la Aplicación.</li>
          <li>3.6. Correo Electrónico: Los mensajes de correo electrónico habituales enviados por Internet pueden estar sujetos a posibles intercepciones, pérdidas o alteraciones. De ninguna manera asumimos responsabilidad alguna por ellos, ni tampoco asumimos responsabilidad alguna ante usted u otra persona por daños o problemas de otra índole en relación con mensajes de correo electrónico que usted nos envíe, o envíe a cualquier otro miembro de PocketPal.</li>
        </ul>
        <Typography variant='h5'>4. Seguridad de tu dinero</Typography>
        <ul>
          <li>4.1 Protección de fondos:
            <ul>
              <li>a. PocketPal implementa medidas de seguridad de última generación para proteger tu dinero y garantizar su seguridad.</li>
              <li>b. Utilizamos tecnología de encriptación y protocolos seguros para proteger las transacciones y la información financiera de nuestros usuarios.</li>
            </ul>
          </li>
          <li>4.2 Responsabilidad del usuario:
            <ul>
              <li>a. Es responsabilidad del usuario mantener la confidencialidad de su información de inicio de sesión y no compartirla con terceros.</li>
              <li>b. El usuario debe notificar inmediatamente a PocketPal en caso de sospecha de uso no autorizado de su cuenta.</li>
            </ul>
          </li>
          <li>4.3 Transacciones seguras:
            <ul>
              <li>a. PocketPal utiliza sistemas de verificación y autenticación para garantizar transacciones seguras.</li>
              <li>b. Nos asociamos con proveedores de servicios de pago confiables para facilitar las transacciones y proteger tus datos financieros.</li>
            </ul>
          </li>
        </ul>
        <Typography variant='h5'>5. Seguridad de tus datos</Typography>
        <ul>
          <li>5.1 Privacidad y confidencialidad:
            <ul>
              <li>a. PocketPal respeta tu privacidad y se compromete a proteger tus datos personales de acuerdo con nuestra Política de Privacidad.</li>
              <li>b. No compartiremos tu información personal con terceros no autorizados, excepto en los casos en que sea necesario para proporcionar los servicios de la Aplicación o cumplir con las leyes y regulaciones aplicables.</li>
            </ul>
          </li>
          <li>5.2 Protección de datos:
            <ul>
              <li>a. Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos contra accesos no autorizados, pérdidas, divulgación o alteración.</li>
              <li>b. Mantenemos tus datos personales almacenados de manera segura y utilizamos procedimientos de seguridad adecuados para protegerlos.</li>
            </ul>
          </li>
        </ul>
        <Typography variant='h5'>6. Propiedad Intelectual</Typography>
        <ul>
          <li>6.1. La aplicación PocketPal, todo su contenido, incluyendo pero no limitado a textos, gráficos, logotipos, iconos y software, están protegidos por leyes de propiedad intelectual y pertenecen a la Empresa o a terceros proveedores de contenido. No se otorga ninguna licencia o derecho de uso sobre la propiedad intelectual, excepto lo expresamente permitido en estos T & C.</li>
          <li>6.2. Se te concede una licencia limitada, no exclusiva y no transferible para utilizar la aplicación PocketPal únicamente con fines personales y no comerciales.</li>
          <li>6.3. No se te permite copiar, modificar, distribuir, transmitir, mostrar, vender, realizar, licenciar ni explotar de ninguna manera, reproducir ni crear trabajos derivados basados en la aplicación PocketPal sin nuestro consentimiento previo por escrito o el de los respectivos propietarios.</li>
        </ul>
        <Typography variant='h5'>7. Limitación de Responsabilidad</Typography>
        <ul>
          <li>7.1. La aplicación PocketPal se proporciona "tal cual" y no ofrecemos garantías de ningún tipo, ya sean explícitas o implícitas, incluyendo, entre otras, garantías de comerciabilidad, idoneidad para un propósito particular y no infracción.</li>
          <li>7.2. En la máxima medida permitida por la ley, PocketPal no será responsable por daños directos, indirectos, incidentales, consecuentes, punitivos, derivados o especiales que surjan del uso o la imposibilidad de utilizar la Aplicación PocketPal o de la imposibilidad de utilizarla, incluso si se ha informado de la posibilidad de dichos daños.</li>
        </ul>
        <Typography variant='h5'>8. Modificaciones de los Términos de Uso</Typography>
        <ul>
          <li>8.1. Nos reservamos el derecho de modificar estos términos de uso en cualquier momento y sin previo aviso.</li>
          <li>8.2. Es tu responsabilidad revisar regularmente estos términos para estar al tanto de las actualizaciones. El uso continuado de la aplicación PocketPal después de cualquier modificación constituirá tu aceptación de los términos revisados.</li>
        </ul>
        <Typography variant='h5'>9. Enlaces Externos</Typography>
        <ul>
          <li>9.1 La Aplicación puede contener enlaces a sitios web o recursos de terceros. No tenemos control sobre dichos sitios o recursos externos y no nos hacemos responsables de su disponibilidad, contenido, publicidad o cualquier otro aspecto relacionado.</li>
        </ul>
        <Typography variant='h5'>10. Ley Aplicable y Jurisdicción</Typography>
        <ul>
          <li>10.1. Estos términos de uso se regirán e interpretarán de acuerdo con las leyes de Argentina. Cualquier disputa que surja en relación con estos términos estará sujeta a la jurisdicción exclusiva de los tribunales de Argentina.</li>
        </ul>
        <Typography variant='h5'>11. Política de cookies</Typography>
        <ul>
          <li>11.1 En PocketPal utilizamos cookies con el objetivo de prestar un mejor servicio y proporcionarle una mejor experiencia de navegación.</li>
          <p>¿Qué es una cookie y para qué sirve? Una cookie es un pequeño archivo de texto que se almacena en el navegador del usuario (tanto en computadoras, tablets o smartphones). Las cookies son esenciales para el funcionamiento de la navegación y usabilidad de nuestra web, permitiéndonos ofrecerles una mejor experiencia a nuestros usuarios. Y, de esta forma, analizar sus hábitos de navegación y facilitarles las próximas visitas al sitio, el cual se vuelve más accesible y nos permite mostrarle publicidad relacionada con sus preferencias. Utilizamos únicamente cookies propias, las cuales son leídas por nuestra web cada vez que se realiza una nueva visita. Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones del navegador instalado en tu ordenador, sin embargo, es importante tener en cuenta que si se deshabilitan algunas funciones del sitio pueden no estar disponibles en toda su plenitud. Para más información sobre cómo bloquear el uso de las cookies puedes visitar los siguientes enlaces:</p>

          <ul>
            <li><a href='https://support.google.com/chrome/answer/95647" target="_blank' rel='noopener noreferrer'>Chrome</a></li>
            <li><a href='http://windows.microsoft.com/es-xl/internet-explorer/delete-manage-cookies#ie=ie-8' target='_blank' rel='noopener noreferrer'>Internet Explorer</a></li>
            <li><a href='https://support.mozilla.org/es/kb/Borrar%20cookies' target='_blank' rel='noopener noreferrer'>Firefox</a></li>
            <li><a href='http://support.apple.com/kb/ht1677?viewlocale=es_ES&locale=es_ES' target='_blank' rel='noopener noreferrer'>Safari</a></li>
          </ul>
        </ul>
        <Typography variant='h5'>12. Seguridad</Typography>
        <ul>
          <li>
            12.1. Nosotros somos responsables por la información obtenida de nuestros clientes en el curso normal de las operaciones e información que recibimos on-line de nuestros visitantes que acceden o interactúan en nuestro sitio en la red. Restringimos el acceso a la información sobre Ud. a aquellos empleados que necesiten la información para suministrarle productos o servicios. Mantenemos procedimientos de seguridad física, electrónica y de procedimientos.
          </li>
        </ul>
        <Typography variant='h5'>13. Generalidades</Typography>
        <ul>
          <li>13.1 La contratación de los servicios o productos sobre los que se informa en el Sitio o que se ofrecen en los sitios de las empresas del PocketPal en Argentina, solo puede realizarse por personas mayores de 18 años de edad.</li>
          <li>13.2 La demora u omisión de PocketPal Argentina en exigir el estricto cumplimiento de estos Términos y Condiciones no podrá interpretarse como renuncia a sus derechos.</li>
        </ul>
        <Typography variant='h5'>14. Jurisdicción y Ley Aplicable</Typography>
        <ul>
          <p>Toda cuestión entre PocketPal Argentina y el usuario estará regida por las leyes de la República Argentina, con exclusión de toda norma que remita a la aplicación de una ley extranjera. Cualquier controversia será sometida a los Tribunales Ordinarios en lo Comercial de la Capital Federal. PocketPal Argentina se encuentra registrado en la República Argentina en el Registro Público de Comercio bajo el N° 954, Folio 483, Libro 51, Tomo A de Estatutos Nacionales. Domicilio Legal: Martiniano Chilavert 2000, B° Nueva Italia, CP 5012, Córdoba, Argentina. CUIT: 30-36238459-6. Dirección de e-mail: contactenos@PocketPal.com.ar.</p>
          <p>Usuarios del sitio: Este website y los Productos y Servicios aquí ofrecidos fueron designados para el uso en la República Argentina. Este website lo provee PocketPal Bank Argentina constituida bajo las leyes de la República Argentina. Si usted se encuentra fuera del territorio de la República Argentina, puede que no estemos autorizados a proveer los productos o servicios publicados en el mismo dentro del país o región en el cual se encuentre. Este website no está destinado a ser distribuido o utilizado por ninguna persona en ninguna jurisdicción, país o región donde la distribución o el uso de este material o los productos ofrecidos estén restringidos o no estén permitidos por ley o regulación. Este website no está dirigido para la distribución o uso por personas en cualquier jurisdicción, país o región donde la distribución o uso de su contenido esté restringido y no estuviese permitido por la ley o la regulación.</p>
          <p>Ley 25.738 (art. 1°): PocketPal Argentina constituida bajo las leyes de la República Argentina. Los accionistas limitan su responsabilidad al capital aportado. CUIT N° 30-36238459-6 - Martiniano Chilavert 2000, Córdoba, Argentina. | Dirección General de Defensa y Protección al Consumidor. Para consultas y/o denuncias ingrese <a href='https://buenosaires.gob.ar/defensaconsumidor/como-denunciar' target='_blank' rel='noopener noreferrer'>aquí</a>.</p>
          <p>Sepa los derechos que existen sobre sus Datos Personales (Resolución AAIP N° 14-E/2018) <a href='https://www.argentina.gob.ar/sites/default/files/texto_guia_de_inversoras_v2_0_2.pdf' target='_blank' rel='noopener noreferrer'>aquí</a>.</p>
        </ul>
      </div>
    </div>
  )
}

export default Terms
