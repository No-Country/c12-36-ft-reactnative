import React from 'react'
import Typography from '@mui/material/Typography'

import '../styles/about.css'

const About = () => {
  return (
    <div className='aboutContainer'>
      <div className='about_title'>
        <Typography variant='h4'>PocketPal</Typography>
        <Typography variant='subtitle1'>Tu Billetera Virtual Todo en Uno</Typography>
        <Typography variant='body1'>Bienvenido a PocketPal, tu billetera virtual todo en uno diseñada para hacer que las transacciones financieras sean rápidas, seguras y convenientes. Este documento te proporcionará una descripción general de PocketPal y sus principales características y funcionalidades.</Typography>
      </div>
      <div className='content'>
        <Typography variant='h5'>¿Qué es PocketPal?</Typography>
        <Typography variant='body1'>PocketPal es una aplicación de billetera virtual que te permite gestionar tus finanzas y realizar transacciones electrónicas desde la comodidad de tu dispositivo móvil o desde nuestra página web. Con PocketPal, puedes llevar el control de tus gastos, realizar pagos, transferir dinero, administrar tarjetas y acceder a diversos servicios financieros, todo en un solo lugar.</Typography>
        <Typography variant='h5'>Características y Funcionalidades Principales</Typography>
        <Typography variant='body1'>Gestión de cuentas y tarjetas: PocketPal te permite vincular tus cuentas bancarias y tarjetas de crédito o débito para un acceso rápido y conveniente a tus fondos. Puedes ver tus saldos, movimientos y detalles de transacciones en tiempo real.</Typography>
        <Typography variant='body1'>Pagos móviles: Olvídate de llevar dinero en efectivo o tarjetas físicas. PocketPal te permite realizar pagos seguros desde tu dispositivo móvil en establecimientos físicos o en línea utilizando tecnología de pago NFC o códigos QR.</Typography>
        <Typography variant='body1'>Transferencias de dinero: Con PocketPal, puedes enviar dinero a tus amigos, familiares o cualquier otra persona de forma rápida y sencilla. Solo necesitas su información de contacto o escanear su código QR para completar la transferencia.</Typography>
        <Typography variant='body1'>Administración de presupuesto: Mantén un control efectivo de tus gastos y ahorros utilizando las herramientas de administración de presupuesto de PocketPal. Establece metas financieras, categoriza tus gastos y obtén informes detallados para tomar decisiones financieras informadas.</Typography>
        <Typography variant='body1'>Recargas y pagos de servicios: PocketPal te permite recargar saldo en tu teléfono móvil, pagar facturas de servicios públicos, recargar tarjetas de transporte público y realizar otros pagos similares directamente desde la aplicación.</Typography>
        <Typography variant='body1'>Seguridad y protección: La seguridad es una prioridad en PocketPal. La aplicación utiliza tecnología de encriptación avanzada para proteger tus datos financieros y cuenta con medidas de seguridad adicionales, como autenticación biométrica (huella digital o reconocimiento facial) para garantizar un acceso seguro a tu cuenta.</Typography>
        <Typography variant='body1'>Soporte al cliente: PocketPal ofrece un servicio de atención al cliente dedicado para resolver cualquier duda o problema que puedas tener. Nuestro equipo de soporte está disponible para brindarte asistencia personalizada y garantizar una experiencia fluida en la aplicación.</Typography>
        <Typography variant='h5'>Conclusión</Typography>
        <Typography variant='body1'>PocketPal es la solución ideal para aquellos que desean simplificar sus transacciones financieras y tener un mayor control sobre sus finanzas. Con su amplia gama de características y funcionalidades, PocketPal te brinda una experiencia completa de billetera virtual todo en uno, asegurando comodidad, seguridad y eficiencia en cada transacción.</Typography>
        <Typography variant='body1'>Descarga PocketPal hoy mismo y descubre cómo llevar tus finanzas al siguiente nivel. Si tienes alguna pregunta adicional o necesitas asistencia, no dudes en contactar a nuestro equipo de soporte. ¡Estamos aquí para ayudarte!</Typography>
      </div>
    </div>
  )
}

export default About
