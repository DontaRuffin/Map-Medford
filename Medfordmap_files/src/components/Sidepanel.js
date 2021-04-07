import React, { useState, Fragment } from "react";
import { Sidebar, Tab } from "react-leaflet-sidebarv2";

import SideComment from "./SideComment";
import "./Sidepanel.css";

function Sidepanel(props) {
    const [collapsed, setCollapsed] = useState(false);
    const [selected, setSelected] = useState("home");
    let comments = props.comments;

    const open = (id) => {
        if (selected === id && collapsed === false) {
            setCollapsed(true);
        } else {
            setCollapsed(false);
            setSelected(id);
        }
    };

    return (
        <Sidebar
            id="sidebar"
            position="left"
            collapsed={collapsed}
            selected={selected}
            onOpen={(id) => open(id)}
            onClose={() => setCollapsed(true)}
            closeIcon={<img className="close" alt="" src="/icons/close.svg" />}
        >
            <Tab
                id="home"
                header="Home"
                icon={
                    selected !== "home" ? (
                        <img className="home" alt="" src="/icons/home.png" />
                    ) : (
                        <img
                            className="home"
                            alt=""
                            src="/icons/home_live.png"
                        />
                    )
                }
                active
            >
                
                <p>
                    <i>If you find that the collaborative map is difficult to use or incompatible with your screen reader, please leave a message at 215-645-2145, and a member of our planning team will contact you.</i>
                </p>
                <p>
                    <i>Desplácese hacia abajo para la versión en español.</i>
                </p>
                <h4>Welcome to the Collaborative Map for Harrisonburg Downtown 2040!</h4>
                <p>
                <b>Do you live, work, worship, play, study, or hang out in Downtown? This map is for you!</b> We want to know your thoughts and dreams for Downtown Harrisonburg.
Use the map to identify places in and around Downtown that are important to you. Click to pick up an icon from the sidebar menu. Click again to pin your icon on the map where it belongs. You can add 3 different kinds of pins to the map:

                </p>


                <div className="infoType">
                    <img className="textIcon" src="/icons/place.png" alt="" />
                    <p>
                        <b>Special Place:</b> Use the{" "}
                        <img
                            className="inTextIcon place"
                            src="/icons/tool_add_place.png"
                            alt=""
                        />{" "}to identify important places in Downtown and share stories about why these places matter to you.

                    </p>
                </div>
                <div className="infoType">
                    <img className="textIcon" src="/icons/idea.png" alt="" />
                    <p>
                        <b>Idea:</b> Use the {" "}<img
                            className="inTextIcon"
                            src="/icons/tool_add_idea.png"
                            alt=""
                        />{" "}
                        to add your ideas for improving Downtown. Are there places you would like to change or preserve? What’s missing Downtown, and where should it go?
                    </p>
                </div>
                <div className="infoType">
                    <img className="textIcon" src="/icons/issue.png" alt="" />
                    <p>
                        <b>Problem:</b> Use the{" "}
                        <img
                            className="inTextIcon"
                            src="/icons/tool_add_issue.png"
                            alt=""
                        />{" "}
                        to highlight problems or concerns you would like to see fixed.
                    </p>
                </div>
                <p>
                Each time you place a {" "}
                        <img
                            className="inTextIcon place"
                            src="/icons/tool_add_place.png"
                            alt=""
                        />, {" "}
                        <img
                            className="inTextIcon"
                            src="/icons/tool_add_idea.png"
                            alt=""
                        />
                        , {" "}
                        <img
                            className="inTextIcon"
                            src="/icons/tool_add_issue.png"
                            alt=""
                        /> add a comment to share what you are thinking.  You can add as many places, ideas, or issues as you want.
                </p>
                <p>
                When you click “Post” your icon and comment will be added to the map. You can change your comments until you close the map. Please be respectful, as everyone can see the comments you share.
                </p>
                <p>
                Most importantly, please share this map with family and friends who care about Downtown Harrisonburg! Together, let’s #DreamDowntownHVA
                </p>
                <button
                    className="getStarted button--primary"
                    onClick={() => setCollapsed(true)}
                >
                    Get Started
                </button>
                <hr/>
                <h4>¡Bienvenidos al Mapa Colaborativo para el proyecto del Centro de Harrisonburg  2040!</h4>
                <p>
                <b>Si usted vive, trabaja, adora, juega, estudia, o pasa el rato en el centro, ¡este mapa es para usted!</b> Queremos saber sus pensamientos y sueños para el Centro de Harrisonburg.  Usa el mapa para identificar los lugares del centro y sus alrededores que son importantes para usted.  Haga clic para elegir un icono del menú en el lado de la pantalla.  Haga clic de nuevo para fijar su icono en el mapa donde debe estar.  Puede añadir 3 tipos diferentes de iconos al mapa:

                </p>


                <div className="infoType">
                    <img className="textIcon" src="/icons/place.png" alt="" />
                    <p>
                        <b>Lugar especial:</b> Usa el{" "}
                        <img
                            className="inTextIcon place"
                            src="/icons/tool_add_place.png"
                            alt=""
                        />{" "}para identificar lugares importantes del centro y compartir historias sobre por qué estos lugares son importantes para usted.

                    </p>
                </div>
                <div className="infoType">
                    <img className="textIcon" src="/icons/idea.png" alt="" />
                    <p>
                        <b>Idea:</b> Usa el {" "}<img
                            className="inTextIcon"
                            src="/icons/tool_add_idea.png"
                            alt=""
                        />{" "}
                        para añadir sus ideas para mejorar el centro.  ¿Hay lugares que le gustaría cambiar o conservar? ¿Qué le falta el centro y dónde debería ser?
                    </p>
                </div>
                <div className="infoType">
                    <img className="textIcon" src="/icons/issue.png" alt="" />
                    <p>
                        <b>Asunto:</b> Usa el{" "}
                        <img
                            className="inTextIcon"
                            src="/icons/tool_add_issue.png"
                            alt=""
                        />{" "}
                        para poner énfasis en los problemas o preocupaciones que quiere ver arreglados.
                    </p>
                </div>
                <p>
                Cada vez que pone un icono de {" "}
                        <img
                            className="inTextIcon place"
                            src="/icons/tool_add_place.png"
                            alt=""
                        />, {" "}
                        <img
                            className="inTextIcon"
                            src="/icons/tool_add_idea.png"
                            alt=""
                        />
                        , {" "}
                        <img
                            className="inTextIcon"
                            src="/icons/tool_add_issue.png"
                            alt=""
                        /> añada un comentario para compartir su opinión.  Puede añadir tantos lugares, ideas, o asuntos como quiere.
                </p>
                <p>
                Cuando haga clic en el botón “Post,” su icono y comentario estarán añadidos al mapa.  Puede cambiar sus comentarios hasta que cierre el mapa.  Por favor, sea respetuoso, como todo el mundo puede ver los comentarios que comparte.
                </p>
                <p>
                Sobre todo, por favor ¡comparta este mapa con sus familiares y amigos a quien les importa el Centro de Harrisonburg.  Juntos, podemos #DreamDowntownHVA
                </p>
            </Tab>

            <Tab
                id="infoTab"
                header="About Downtown 2040"
                icon={
                    selected !== "infoTab" ? (
                        <img
                            className="info"
                            alt=""
                            src="/icons/new_info.png"
                        />
                    ) : (
                        <img
                            className="info"
                            alt=""
                            src="/icons/info_live.png"
                        />
                    )
                }
            >
                <p>
                        <img
                            className="Logo"
                            alt="Harrisonburg_logo"
                            src="/icons/Downtown2040_Logo_FINAL.png"
                        />
                </p>
                <p>
                <i>Desplácese hacia abajo para la versión en español.</i>
                </p>
                <p>
                Downtown 2040 is a community-driven plan for the heart of Harrisonburg – our beloved DowntownHVA. We invite everyone in the community to dream with us about the next year, and the next 20 years, in Downtown’s evolution.
                </p>
                <p>
                The Downtown community isn’t just people who live within the area on the map; it includes residents from surrounding neighborhoods, local business-owners, Downtown employees, students, and visitors too. As a community-driven plan, Downtown 2040 will reflect our shared history, culture, values, and priorities – in other words, our hopes and dreams for Downtown.  
                </p>
                <p>
                By adding your own stories, ideas, and issues to the Collaborative Map, you can help shape this plan for Downtown.
                </p>
                <p>
                More information about Downtown 2040 is available at: {" "}
                    <b>
                        <a
                            target="_blank"
                            href="https://www.harrisonburgva.gov/downtown-2040 "
                        >
                            https://www.harrisonburgva.gov/downtown-2040 
                        </a>
                    </b>
                </p>
                <hr/>
                <h4>Sobre el Proyecto del Centro 2040 (Downtown 2040)</h4>
                <p>
                El proyecto del Centro 2040 (Downtown 2040) es un plan guiado por la comunidad para el corazón de Harrisonburg – nuestro querido DowntownHVA. Les invitamos a todos los miembros de la comunidad a soñar con nosotros sobre cómo debería ser el centro y cómo debería cambiar en el próximo año, y en los próximos 20 años.
                </p>
                <p>
                Nuestra comunidad del centro incluye a los residentes (incluso ellos de ciudades más lejos), los empresarios locales, los empleados del centro, los estudiantes, y los visitantes también.  Como un plan guiado por la comunidad, Downtown 2040 reflejará nuestra historia, cultura, valores, y prioridades comunes – en otras palabras, nuestras esperanzas y sueños para el centro.  
                </p>
                <p>
                Al añadir sus propias historias, ideas, y asuntos al mapa colaborativo, puede ayudar a dar forma a este plan del centro.
                </p>
                <p>
                Más información sobre Downtown 2040 está disponible en: {" "}
                    <b>
                        <a
                            target="_blank"
                            href="https://www.harrisonburgva.gov/downtown-2040 "
                        >
                            https://www.harrisonburgva.gov/downtown-2040 
                        </a>
                    </b>
                </p>
            </Tab>

            <Tab
                id="commentsTab"
                header="Comments"
                icon={
                    selected !== "commentsTab" ? (
                        <img
                            className="comments"
                            alt=""
                            src="/icons/side_comments.png"
                        />
                    ) : (
                        <img
                            className="comments"
                            alt=""
                            src="/icons/comments_live.png"
                        />
                    )
                }
            >
                {comments &&
                    Object.keys(comments).length > 0 &&
                    Object.keys(comments).map((id) => (
                        <Fragment key={id}>
                            {!comments[id].hidden && (
                                <SideComment
                                    key={id}
                                    comment={{ id: id, ...comments[id] }}
                                    map={props.map}
                                    latlng={{
                                        lat: props.points[id].lng,
                                        lng: props.points[id].lat,
                                    }}
                                ></SideComment>
                            )}
                        </Fragment>
                    ))}
            </Tab>
        </Sidebar>
    );
}

export default Sidepanel;
