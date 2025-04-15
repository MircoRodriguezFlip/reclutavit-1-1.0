import styles from '../../styles/modules/politicasPage.module.css';

import { BotonNav } from '../utils/BotonNav';

import { NavLink } from 'react-router-dom';

const URL_LINK = (
    <NavLink to="/" title="ir a www.reclutavit.com.mx">
        www.reclutavit.com.mx
    </NavLink>
);

const PoliticasPage = () => {
    return (
        <main className={styles.sectionContainer}>
            <header className={`${styles.sectionTitulo} bold-text`}>
                <h1 className="bold-text">AVISO DE PRIVACIDAD</h1>
                <p className="light-text">02/04/2025</p>
                <h2 className="bold-text">TÉRMINOS Y CONDICIONES DE USO</h2>
            </header>

            <section className={`${styles.sectionContenido} light-text`}>
                <h3 className="bold-text">VitaMet México S.A. de C.V.</h3>

                <p>
                    Ponemos a su disposición los siguientes TÉRMINOS Y CONDICIONES DE USO, los cuales son aplicables por el simple uso o acceso a
                    cualquiera de las Páginas que integran la página web {URL_LINK} propiedad de VitaMet México S.A. de C.V. que en lo sucesivo se
                    denominará "VITAMET MEXICO".
                </p>

                <p>
                    El usuario está aceptando los TÉRMINOS Y CONDICIONES DE USO contenidos en este convenio y declara expresamente su aceptación
                    utilizando para tal efecto medios electrónicos, en términos de lo dispuesto por el artículo 1803 del Código Civil Federal.
                </p>

                <p>
                    En caso de no aceptar en forma absoluta y completa los términos y condiciones de este convenio, el usuario deberá abstenerse de
                    acceder, utilizar y observar el sitio Web {URL_LINK}.
                </p>

                <p>
                    Y en caso de que el usuario acceda, utilice y observe el sitio web {URL_LINK} se considerará como una absoluta y expresa
                    aceptación de los TÉRMINOS Y CONDICIONES DE USO aquí estipulados.
                </p>

                <p>
                    La sola utilización de dicha página de Internet le otorga al público en general la condición de usuario (en adelante referido como
                    el "usuario" o los "usuarios") e implica la aceptación, plena e incondicional, de todas y cada una de las condiciones generales y
                    particulares incluidas en estos TÉRMINOS Y CONDICIONES DE USO publicados por VITAMET MEXICO en el momento mismo en que el usuario
                    acceda al sitio web.
                </p>

                <p>
                    Cualquier modificación a los presentes TÉRMINOS Y CONDICIONES DE USO será realizada cuando el titular de la misma, en este caso
                    VITAMET MEXICO, lo considere apropiado, siendo exclusiva responsabilidad del usuario asegurarse de tomar conocimiento de tales
                    modificaciones.
                </p>

                <h4 className="bold-text">Convenio</h4>

                <p>
                    Convenio de adhesión para el uso de la página de Internet {URL_LINK} que celebran: por una parte, VITAMET MEXICO y, por la otra,
                    el usuario, sujetándose, ambas partes, a lo establecido en este documento.
                </p>

                <h4 className="bold-text">Licencia</h4>

                <p>
                    Por virtud de la celebración de este convenio, le otorga y concede al usuario el derecho no exclusivo, revocable y no transferible
                    de ver y utilizar el sitio Web {URL_LINK} de conformidad con los TÉRMINOS Y CONDICIONES DE USO que aquí se estipulan.
                </p>

                <p>
                    Para los efectos del presente convenio, las partes acuerdan que por "usuario" se entenderá a cualquier persona de cualquier
                    naturaleza que ingrese al sitio Web {URL_LINK} y/o a cualquiera de las subpáginas que despliegan su contenido y/o a la persona de
                    cualquier naturaleza que se dé de alta y/o use cualquiera de los servicios que se ofrecen a través de dicha página. El usuario
                    sólo podrá imprimir y/o copiar cualquier información contenida o publicada en el sitio Web {URL_LINK} exclusivamente para uso
                    personal, queda terminantemente prohibido el uso comercial de dicha información.
                </p>

                <p>
                    En caso de ser persona moral se sujetará a lo dispuesto por el artículo 148, fracción IV de la Ley Federal del Derecho de Autor.
                    La reimpresión, publicación, distribución, asignación, sublicencia, venta, reproducción electrónica o por otro medio, parcial o
                    total, de cualquier información, documento o gráfico que aparezca en el sitio Web {URL_LINK} para cualquier uso distinto al
                    personal no comercial le está expresamente prohibido al usuario, a menos de que cuente con la autorización previa y por escrito de
                    VITAMET MEXICO.
                </p>

                <h4 className="bold-text">Reglas para el uso del sitio web</h4>

                <p>
                    El usuario y VITAMET MEXICO están de acuerdo en que la utilización del sitio Web {URL_LINK} se sujetará a las siguientes reglas:
                </p>

                <p>
                    1.- Información contenida en el sitio Web. El usuario reconoce y acepta que la información publicada o contenida en dicho sitio
                    será claramente identificada de forma tal que se reconozca que la misma proviene y ha sido generada por VITAMET MEXICO o por sus
                    proveedores. No obstante, la información, conceptos y opiniones publicadas en dicho sitio no necesariamente reflejan la posición
                    de VITAMET MEXICO, ni de sus empleados, oficiales, directores, accionistas, licenciatarios y concesionarios (en lo sucesivo los
                    "afiliados"). Por esta razón, VITAMET MEXICO no se hace responsable por ninguna de las informaciones, opiniones y conceptos que se
                    emitan en la página web referida. En este caso, se recomienda al usuario consultar con un especialista y/o profesional en la
                    materia. Asimismo, VITAMET MEXICO no se hace responsable de la información contenida en la página de Internet, incluidas las
                    subpáginas, en el entendido de que el uso y seguimiento de la misma es bajo riesgo y responsabilidad del usuario.
                </p>

                <p>
                    VITAMET MEXICO se reserva el derecho de bloquear el acceso o remover en forma parcial o total toda información, comunicación o
                    material que a su exclusivo juicio pueda resultar: i) abusivo, difamatorio u obsceno; ii) fraudulento, artificioso o engañoso;
                    iii) violatorio de derechos de autor, marcas, confidencialidad, secretos industriales o cualquier derecho de propiedad intelectual
                    de un tercero; iv) ofensivo o; v) que de cualquier forma contravenga lo establecido en este convenio. Si el usuario desea obtener
                    mayor información de un tema en específico proveído por VITAMET MEXICO o sus proveedores deberá consultarlo directamente con cada
                    uno de ellos, según corresponda, y/o con un especialista en la materia.
                </p>

                <p>
                    El usuario reconoce que VITAMET MEXICO no controla o censura previamente el contenido disponible en la página de Internet. Por tal
                    motivo, VITAMET MEXICO no asume ninguna responsabilidad por el contenido provisto a dicha página por proveedores independientes o
                    ajenos a VITAMET MEXICO y no tiene el control editorial sobre el contenido, información y/o material generado y/o provisto por
                    terceros. Todas las opiniones, consejos, declaraciones, servicios, ofertas u otras informaciones o contenidos expresados o puestos
                    a disposición del público por terceros, pertenecen a su respectivo autor y VITAMET MEXICO no asume responsabilidad alguna frente a
                    ello. De la misma forma, VITAMET MEXICO no garantiza la exactitud, veracidad, amplitud y/o utilidad de cualquier contenido
                    provisto por tales terceros. Adicionalmente, VITAMET MEXICO no es responsable ni garantiza la exactitud, exhaustividad, veracidad
                    y/o confiabilidad de cualquier opinión, información, consejo o declaración expresados por VITAMET MEXICO a través de su página de
                    Internet y bajo ninguna circunstancia VITAMET MEXICO será responsable de cualquier daño y/o perjuicio, directo o indirecto,
                    causado en virtud de la confianza que el usuario deposite en información obtenida a través de su sitio Web. VITAMET MEXICO se
                    reserva el derecho de suprimir o modificar el contenido de esta página que, a exclusivo juicio de VITAMET MEXICO, no cumpla con
                    sus estándares o que pudiera resultar contrario al ordenamiento jurídico vigente y, por consiguiente, no será responsable por
                    cualquier falla o tardanza que se genere al eliminar tal material.
                </p>

                <h4 className="bold-text">Formatos</h4>

                <p>
                    Los usuarios reconocen que, al proporcionar la información de carácter personal requerida en alguno de los servicios que se
                    promocionan en este sitio Web, otorgan a VITAMET MEXICO la autorización señalada en el artículo 8 (ocho) de la Ley Federal de
                    Protección de Datos Personales en Posesión de Particulares. Asimismo, para la prestación de servicios, el usuario se obliga además
                    a aceptar los términos y condiciones estipulados para tal efecto.
                </p>

                <h4 className="bold-text">Derechos de autor y propiedad industrial</h4>

                <p>
                    VITAMET MEXICO, el sitio Web {URL_LINK} sus logotipos y todo el material que aparece en dicho sitio, son marcas, nombres de
                    dominio, nombres comerciales y obras artísticas propiedad de sus respectivos titulares y están protegidos por los tratados
                    internacionales y las leyes aplicables en materia de propiedad intelectual y derechos de autor.
                </p>

                <p>
                    Los derechos de autor sobre el contenido, organización, recopilación, compilación, información, logotipos, fotografías, imágenes,
                    programas, aplicaciones, y en general cualquier información contenida o publicada en el sitio Web {URL_LINK} se encuentran
                    debidamente protegidos a favor de VITAMET MEXICO, sus afiliados, proveedores y/o de sus respectivos propietarios, de conformidad
                    con la legislación aplicable en materia de propiedad intelectual e industrial.
                </p>

                <p>
                    Se prohíbe expresamente al usuario modificar, alterar o suprimir, ya sea en forma total o parcial, los avisos, marcas, nombres
                    comerciales, señas, anuncios, logotipos o en general cualquier indicación que se refiera a la propiedad de la información
                    contenida en el sitio señalado.
                </p>

                <p>
                    En caso de que el usuario transmita a VITAMET MEXICO cualquier información, programas, aplicaciones, software o en general
                    cualquier material que requiera ser licenciado a través del sitio Web {URL_LINK} el usuario otorga con este acto a VITAMET MEXICO
                    una licencia perpetua, universal, gratuita, no exclusiva, mundial y libre de regalías, que incluye los derechos de sublicenciar,
                    vender, reproducir, distribuir, transmitir, crear trabajos derivados, exhibirlos y ejecutarlos públicamente.
                </p>

                <p>
                    Lo establecido en el párrafo anterior se aplicará igualmente a cualquier otra información que el usuario envíe o transmita a
                    VITAMET MEXICO, incluyendo, sin limitación alguna, ideas para renovar o mejorar el sitio Web {URL_LINK} ya sea que éstas hayan
                    sido incluidas en cualquier espacio de la página señalada o en virtud de otros medios o modos de transmisión conocidos o que sean
                    desarrollados en el futuro.
                </p>

                <p>
                    Por lo anterior, el usuario renuncia expresamente con este acto a llevar a cabo cualquier acción, demanda o reclamación en contra
                    de VITAMET MEXICO, sus afiliados o proveedores por cualquier actual o eventual violación de cualquier derecho de autor o propiedad
                    intelectual derivado de la información, programas, aplicaciones, software, ideas y demás material que el propio usuario envíe al
                    sitio Web {URL_LINK}.
                </p>

                <p>
                    Es nuestra política actuar contra las violaciones que en materia de propiedad intelectual se pudieran generar u originar según lo
                    estipulado en la legislación y en otras leyes de propiedad intelectual aplicables, incluyendo la eliminación o el bloqueo del
                    acceso a material que se encuentra sujeto a actividades que infrinjan el derecho de propiedad intelectual de terceros.
                </p>

                <p>
                    En caso de que algún usuario o tercero consideren que cualquiera de los contenidos que se encuentren o sean introducidos en{' '}
                    {URL_LINK} y/o cualquiera de sus servicios, violen sus derechos de propiedad intelectual deberán enviar una notificación a la
                    siguiente dirección talentohumano@vitamet.com.mx, en la que indiquen: i) datos personales verídicos (nombre, dirección, número de
                    teléfono y dirección de correo electrónico del reclamante); ii) firma autógrafa con los datos personales del titular de los
                    derechos de propiedad intelectual; iii) indicación precisa y completa del (los) contenido (s) protegido (s) mediante los derechos
                    de propiedad intelectual supuestamente infringidos, así como la localización de dichas violaciones en el sitio web referido; iv)
                    declaración expresa y clara de que la introducción del (los) contenido (s) indicado (s) se ha realizado sin el consentimiento del
                    titular de los derechos de propiedad intelectual supuestamente infringidos; v) declaración expresa, clara y bajo la
                    responsabilidad del reclamante de que la información proporcionada en la notificación es exacta y de que la introducción del (los)
                    contenido (s) constituye una violación de dichos derechos.
                </p>

                <h4 className="bold-text">Material publicitario</h4>

                <p>
                    El usuario reconoce y acepta que VITAMET MEXICO es una organización independiente de terceros patrocinadores y anunciantes cuya
                    información, imágenes, anuncios y demás material publicitario o promocional (en lo subsecuente "material publicitario") puede ser
                    publicado en el sitio Web {URL_LINK}.
                </p>

                <p>
                    El usuario reconoce y acepta que el material publicitario no forma parte del contenido principal que se publica en dicho sitio.
                    Asimismo, reconoce y acepta con este acto que este material se encuentra protegido por las leyes que en materia de propiedad
                    intelectual e industrial resulten aplicables.
                </p>

                <h4 className="bold-text">Negación de garantías</h4>

                <p>
                    El usuario está de acuerdo que la utilización del sitio Web {URL_LINK} se realiza bajo su propio riesgo y que los servicios y
                    productos que ahí se prestan y ofrecen se prevén sobre una base "tal cual" y "según sean disponibles".
                </p>

                <p>
                    VITAMET MEXICO no garantiza que la página señalada satisfaga los requerimientos del usuario o que los servicios que en ella se
                    ofrecen no sufran interrupciones, sean seguros o estén exentos de errores.
                </p>

                <p>
                    VITAMET MEXICO no garantiza o avala en ninguna forma la veracidad, precisión, legalidad, moralidad o ninguna otra característica
                    del contenido del material que se publique en el sitio Web {URL_LINK}.
                </p>

                <p>
                    VITAMET MEXICO se libera de cualquier responsabilidad y condiciones, tanto expresas como implícitas, en relación con los servicios
                    e información contenida o disponible en o a través de esta página web; incluyendo, sin limitación alguna la disponibilidad de uso
                    del sitio Web {URL_LINK}.
                </p>

                <h4 className="bold-text">La disponibilidad de uso del sitio Web</h4>

                <p>
                    La ausencia de virus, errores, desactivadores o cualquier otro material contaminante o con funciones destructivas en la
                    información o programas disponibles en o a través de esta página o en general cualquier falla en dicho sitio.
                </p>

                <p>
                    No obstante lo anterior, VITAMET MEXICO o sus proveedores podrán actualizar el contenido de la página constantemente, por lo que
                    se solicita al usuario tomar en cuenta que algunas informaciones publicitadas o contenidas en o a través de este sitio web pueden
                    haber quedado obsoletas y/o contener imprecisiones o errores tipográficos u ortográficos.
                </p>

                <h4 className="bold-text">Limitaciones a la responsabilidad</h4>

                <p>
                    Hasta el máximo permitido por las leyes aplicables, VITAMET MEXICO no será responsable, en ningún caso, por daños directos,
                    especiales, incidentales, indirectos, o consecuenciales que en cualquier forma se deriven o se relacionen con:
                </p>

                <p>
                    1.- El uso o ejecución del sitio Web {URL_LINK}, la proveeduría o falta de la misma de servicios de cualquier información o
                    gráficos contenidos o publicados en o a través del sitio señalado. La actualización o falta de actualización de la información.
                </p>

                <p>
                    2.- La alteración o modificación, total o parcial, de la información después de haber sido incluida en dicho sitio. Cualquier otro
                    aspecto o característica de la información contenida o publicada en la página web o a través de las ligas que eventualmente se
                    incluyan en este sitio.
                </p>

                <p>
                    3.- La proveeduría o falta de proveeduría que los demás servicios, todos los supuestos anteriores serán vigentes, aún en los casos
                    en que se le hubiere notificado o avisado a VITAMET MEXICO acerca de la posibilidad de que se ocasionaran dichos daños.
                </p>

                <p>
                    4.- Modificaciones al sitio Web {URL_LINK} VITAMET MEXICO podrá en cualquier momento y cuando lo considere conveniente, sin
                    necesidad de avisar al usuario, realizar correcciones, adiciones, mejoras o modificaciones al contenido, presentación,
                    información, servicios, áreas, bases de datos y demás elementos de dicho sitio, sin que ello de lugar ni derecho a ninguna
                    reclamación o indemnización, ni que esto implique reconocimiento de responsabilidad alguna a favor del usuario.
                </p>

                <h4 className="bold-text">Modificaciones al convenio</h4>

                <p>
                    VITAMET MEXICO se reserva el derecho de modificar los TÉRMINOS Y CONDICIONES DE USO de este convenio en cualquier momento, siendo
                    efectivas dichas modificaciones de forma inmediata por medio de:
                </p>

                <p>
                    La publicación en el sitio Web {URL_LINK} del convenio modificado. La notificación al usuario sobre dichas modificaciones. De esta
                    forma, el usuario está de acuerdo en revisar dicho convenio periódicamente con la finalidad de mantenerse al tanto de dichas
                    modificaciones. No obstante lo anterior, cada vez que el usuario acceda al sitio señalado se considerará como una aceptación
                    absoluta a las modificaciones del presente convenio.
                </p>

                <h4 className="bold-text">Privacidad de la información</h4>

                <p>
                    A través de {URL_LINK} VITAMET MEXICO puede obtener diversa información del usuario que puede compilarse y fijarse en una base de
                    datos para lo cual VITAMET MEXICO publica su "Aviso de Privacidad" en el sitio de {URL_LINK} el cual se recomienda consultar para
                    información referente al tratamiento de los datos personales del usuario.
                </p>

                <p>
                    Si VITAMET MEXICO decide cambiar su Aviso de Privacidad, anunciará dichos cambios en el sitio {URL_LINK} de manera que el usuario
                    siempre pueda saber quién es el responsable del tratamiento, qué información se recopila, para qué se solicita, entre otras cosas.
                </p>

                <h4 className="bold-text">Términos adicionales</h4>

                <p>
                    Ocasionalmente, VITAMET MEXICO podrá agregar a los TÉRMINOS Y CONDICIONES DE USO del presente convenio provisiones adicionales
                    relativas a áreas específicas o nuevos servicios que se proporcionen en o a través del sitio Web {URL_LINK} (en lo subsecuente
                    "términos adicionales"), los cuales serán publicados en las áreas específicas o nuevos servicios de dicho sitio para su lectura y
                    aceptación.
                </p>

                <p>
                    El usuario reconoce y acepta que a estos términos adicionales – ocasionalmente – VITAMET MEXICO podrá agregar a los mismos,
                    provisiones adicionales relativas a áreas específicas o nuevos servicios que se proporcionen en o a través del sitio Web{' '}
                    {URL_LINK} (en lo subsecuente "términos adicionales"), los cuales serán publicados en las áreas específicas o nuevos servicios de
                    dicho sitio para su lectura y aceptación.
                </p>

                <p>
                    El usuario reconoce y acepta que estos términos adicionales forman parte integrante del presente convenio para todos los efectos
                    legales a que haya lugar.
                </p>

                <h4 className="bold-text">Cesión de derechos</h4>

                <p>
                    VITAMET MEXICO podrá, en cualquier momento y cuando así lo estime conveniente, ceder total o parcialmente sus derechos y
                    obligaciones derivados del presente convenio. En virtud de dicha cesión, VITAMET MEXICO quedará liberada de cualquier obligación a
                    favor del usuario, establecida en el presente convenio.
                </p>

                <h4 className="bold-text">Indemnización</h4>

                <p>
                    El usuario está de acuerdo en indemnizar a VITAMET MEXICO, sus afiliados, proveedores, vendedores y asesores por cualquier acción,
                    demanda o reclamación (incluso de honorarios de abogados y de costas judiciales) derivadas de cualquier incumplimiento por parte
                    del usuario al presente convenio; incluyendo, sin limitación de alguna de las derivadas de:
                </p>

                <p>1.- Cualquier aspecto relativo al uso del sitio Web {URL_LINK}.</p>

                <p>
                    2.- La información contenida o disponible en o a través de dicho sitio o de injurias, difamación o cualquier otra conducta
                    violatoria del presente convenio por parte del usuario en el uso de la página web señalada.
                </p>

                <p>
                    3.- La violación a las leyes aplicables o tratados internacionales relativos a los derechos de autor o propiedad intelectual,
                    contenidos o disponibles en, o a través de dicho sitio web.
                </p>

                <h4 className="bold-text">Terminación</h4>

                <p>
                    VITAMET MEXICO se reserva el derecho, a su exclusiva discreción, y sin necesidad de aviso o notificación al usuario, para:
                    Terminar definitivamente el presente convenio. Descontinuar o dejar de publicar definitivamente el sitio Web {URL_LINK} sin
                    responsabilidad alguna para VITAMET MEXICO, sus afiliados o proveedores.
                </p>

                <h4 className="bold-text">Subsistencia</h4>

                <p>
                    Estos TÉRMINOS Y CONDICIONES DE USO, así como los términos adicionales, constituyen el acuerdo íntegro entre las partes, y
                    sustituye cualquier otro acuerdo o convenio celebrado con anterioridad. Cualquier cláusula o provisión del presente convenio, así
                    como de los términos adicionales, legalmente declarada inválida, será eliminada o modificada a elección de VITAMET MEXICO, con la
                    finalidad de corregir su vicio o defecto. Sin embargo, el resto de las cláusulas o provisiones mantendrán su fuerza,
                    obligatoriedad y validez.
                </p>

                <h4 className="bold-text">No renuncia de derechos</h4>

                <p>
                    La inactividad por parte de VITAMET MEXICO, sus afiliados o proveedores al ejercicio de cualquier derecho o acción derivados del
                    presente convenio, en ningún momento deberá interpretarse como renuncia a dichos derechos o acciones.
                </p>

                <h4 className="bold-text">Legislación aplicable y jurisdicción</h4>

                <p>
                    Este convenio estará sujeto y será interpretado de acuerdo con las leyes y ante los tribunales de la Ciudad de Monterrey, Nuevo
                    León.
                </p>
            </section>

            <section className={`${styles.sectionContenido} light-text`}>
                <h3 className="bold-text">AVISO DE PRIVACIDAD VitaMet México S.A. de C.V.</h3>

                <p>
                    De conformidad con lo establecido en los artículos 15, 16 y 17, y demás relativos de la Ley Federal de Protección de Datos
                    Personales en Posesión de Particulares, en adelante “LA LEY”, se emite y pone a disposición el presente AVISO DE PRIVACIDAD en los
                    siguientes términos:
                </p>

                <p>
                    I. RESPONSABLE DEL USO Y PROTECCIÓN DE LOS DATOS PERSONALES: VitaMet México S.A. de C.V., (en lo sucesivo “RESPONSABLE”), con
                    domicilio en Misión de San Buenaventura número 107, Colonia las Misiones, Santiago, Nuevo León, C.P. 67302.
                </p>

                <h4 className="bold-text">II. TITULAR DE LA INFORMACIÓN: </h4>

                <p>
                    A) Toda Persona Física o Moral titular de la información, que contrate servicios, preste y/o ponga bienes a disposición del
                    RESPONSABLE, con el fin de cumplir las obligaciones contractuales que derivan de la actividad comercial del RESPONSABLE.
                </p>

                <p>
                    B) Las personas físicas que laboren para la RESPONSABLE, en forma directa o por medio de cualquier empresa que le preste servicios
                    de personal.
                </p>

                <p>
                    C) Las personas físicas que por cualquier motivo depositen, provean, o de cualquier modo pongan a disposición del RESPONSABLE
                    información catalogada como “Dato Personal, Sensible o Confidencial”, para efecto de usar el sitio web o abrir una cuenta del
                    RESPONSABLE, o usar los servicios que ofrece el RESPONSABLE.
                </p>

                <h4 className="bold-text">III. TRATAMIENTO DE DATOS PERSONALES:</h4>

                <p>
                    El RESPONSABLE podrá solicitar y/o recolectar a través del Sitio y Otros Medios Datos Personales de los TITULARES para su uso
                    comercial, divulgación y/o almacenamiento por cualquier medio. El RESPONSABLE y/o cualquier tercero que llegue a intervenir en
                    cualquier fase del Tratamiento de Datos Personales guardará confidencialidad respecto de los mismos cuando tengan dicho carácter,
                    conforme a las disposiciones legales aplicables en los Estados Unidos Mexicanos (México).
                </p>

                <h4 className="bold-text">III. DATOS QUE RECABA EL RESPONSABLE:</h4>

                <p>Los datos personales que recaba el RESPONSABLE de los TITULARES, serán los siguientes:</p>

                <ul>
                    <li>Nombre completo.</li>
                    <li>Correos electrónicos, números telefónicos de domicilios, oficinas y móviles del TITULAR.</li>
                    <li>Domicilio.</li>
                </ul>

                <h4 className="bold-text">IV. DATOS QUE NO RECABARÁ O SOLICITARÁ EL RESPONSABLE:</h4>

                <p>
                    Los datos personales que por ningún motivo recabará o solicitará el RESPONSABLE de cualquiera de los TITULARES enunciados en este
                    documento, son: Preferencias sexuales, Ideologías u Opiniones Sociales, Políticas o Religiosas, Afiliación a grupos, clubes o
                    asociaciones de cualquier tipo, Origen Étnico, Condición Social, o cualquier otra que tienda a discriminar a los TITULARES.
                </p>

                <h4 className="bold-text">V. FINALIDAD DEL TRATAMIENTO DE LOS DATOS Y PLAZO DE CONSERVACIÓN</h4>

                <p>
                    Para el caso de los TITULARES, el RESPONSABLE, utilizará exclusivamente los Datos recabados y enunciados para entablar, formalizar
                    y realizar las obligaciones legales y contractuales que hayan pactado tanto el TITULAR como el RESPONSABLE. La información
                    recabada será resguardada por el RESPONSABLE durante toda la relación contractual, y hasta 10 años después de haber sido
                    concluida, a menos que la Autoridad Competente o las Disposiciones Legales aplicables, ordenen o señalen un plazo mayor.
                </p>

                <h4 className="bold-text">VI. LIMITACIÓN DEL USO O DIVULGACIÓN DE LOS DATOS:</h4>

                <p>
                    El TITULAR, podrá limitar el uso o divulgación de sus Datos en el momento en que éste elija, siempre y cuando no sean necesarios
                    para cumplir con las obligaciones contractuales entre el TITULAR y el RESPONSABLE. Bastando para ello, que el TITULAR envíe su
                    solicitud al Departamento de Datos Personales del RESPONSABLE, al correo electrónico talentohumano@vitamet.com.mx, en la cual
                    especifique qué información quiere limitar y los motivos.
                </p>

                <h4 className="bold-text">
                    VII. MEDIO PARA EJERCER LOS DERECHOS DE ACCESO, RECTIFICACIÓN, CANCELACIÓN Y OPOSICIÓN DE DATOS PERSONALES:
                </h4>

                <p>
                    El TITULAR, podrá solicitar el acceso, rectificación, cancelación y oposición, respecto de los Datos Personales que le conciernen,
                    conforme a lo establecido por LA LEY, mediante solicitud que haga al Departamento de Datos Personales del RESPONSABLE, al correo
                    electrónico talentohumano@vitamet.com.mx, la cual deberá contener y acompañar lo siguiente:
                </p>

                <ul>
                    <li>El nombre del TITULAR y domicilio u otro medio para comunicarle la respuesta a su solicitud.</li>
                    <li>Los documentos que acrediten la identidad o, en su caso, la representación legal del TITULAR.</li>
                    <li>
                        La descripción clara y precisa de los datos personales respecto de los que se busca ejercer alguno de los derechos antes
                        mencionados.
                    </li>
                    <li> Cualquier otro elemento o documento que facilite la localización de los datos personales.</li>
                </ul>

                <p>
                    El Departamento de Datos Personales del RESPONSABLE, contará con el plazo de 20 días hábiles contados a partir de la fecha de
                    solicitud, para emitir la respuesta correspondiente. El cual podrá ser ampliado en una sola ocasión por el mismo plazo cuando las
                    circunstancias del caso lo ameriten. La respuesta se comunicará por correo electrónico al TITULAR.
                </p>

                <h4 className="bold-text">VIII. TRANSFERENCIAS DE DATOS PERSONALES:</h4>

                <p>
                    La información del TITULAR sólo será compartida por el RESPONSABLE, a las sociedades controladoras, subsidiarias o afiliadas bajo
                    el control común del RESPONSABLE, o a una sociedad matriz o a cualquier sociedad del mismo grupo del RESPONSABLE que opere bajo
                    los mismos procesos y políticas internas, o proveedores, patrocinadores, publicistas, contratistas y/o socios comerciales para
                    efectos de verificación de datos bancarios, recarga de saldo, pago de premios, publicidad, promociones y notificaciones
                    relacionadas con el Sitio o el servicio.
                </p>

                <p>
                    Los terceros que reciban la información relacionada con los Datos Personales de los Usuarios están obligados a cumplir con lo
                    previsto en este Aviso de Privacidad, así como con los Términos y Condiciones del Sitio y de la legislación aplicable en México.
                    Lo anterior, cuando dicha transferencia sea necesaria por virtud de un contrato celebrado o por celebrar en interés del TITULAR,
                    por el RESPONSABLE y un tercero. Por lo que por ningún motivo o circunstancia, el RESPONSABLE divulgará o publicará datos de los
                    TITULARES a personas ajenas a esta o a cualquier medio de comunicación, con la salvedad de que sea ordenado por la Autoridad
                    Competente en ejercicio de sus atribuciones legales.
                </p>

                <h4 className="bold-text">IX. PROCEDIMIENTO Y MEDIO POR EL CUAL SE COMUNICARÁ A LOS TITULARES LOS CAMBIOS AL AVISO DE PRIVACIDAD:</h4>

                <p>
                    El RESPONSABLE comunicará a los TITULARES, cualquier cambio al Aviso de Privacidad de conformidad con lo establecido por LA LEY,
                    pudiendo ser a través de medio electrónico, óptico, sonoro, visual, o a través de cualquier otra tecnología.
                </p>
            </section>

            <section>
                <BotonNav />
            </section>
        </main>
    );
};

export default PoliticasPage;
