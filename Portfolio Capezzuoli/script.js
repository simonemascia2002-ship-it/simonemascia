document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById('basic-latin-grid');
    const bigPreview = document.getElementById('big-preview');
    const infoName = document.getElementById('info-name');
    const infoDecimal = document.getElementById('info-decimal');
    const infoHex = document.getElementById('info-hex');

    // Codici Unicode estratti dal font Fondazione-Regular + Varianti inserite nel PUA (57344-57357)
    const unicodes = [32, 33, 38, 39, 40, 41, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 63, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 160, 161, 180, 191, 192, 193, 200, 201, 204, 205, 210, 211, 217, 218, 224, 225, 232, 233, 236, 237, 242, 243, 249, 250, 8211, 8212, 8217, 8220, 8221, 8222, 8592, 8593, 8594, 8595, 64257, 64258, 57344, 57345, 57346, 57347, 57348, 57349, 57350, 57351, 57352, 57353, 57354, 57355, 57356, 57357];

    unicodes.forEach(i => {
        const box = document.createElement('div');
        box.classList.add('glyph-box');

        // Trasforma il numero nel rispettivo carattere
        const character = String.fromCodePoint(i);
        box.textContent = character;

        // Seleziona la 'A' di default all'avvio (facoltativo)
        if (i === 65) {
            box.classList.add('selected');
        }

        // Gestione dell'evento CLICK su ogni singola cella
        box.addEventListener('click', () => {
            // Rimuove la selezione da tutti gli altri quadratini
            document.querySelectorAll('.glyph-box').forEach(el => el.classList.remove('selected'));

            // Aggiunge la selezione (sfondo nero) al quadratino cliccato
            box.classList.add('selected');

            // Aggiorna il pannello di sinistra con i dati del carattere cliccato
            bigPreview.textContent = character;
            infoName.textContent = character;
            infoDecimal.textContent = i;

            // Converte il numero decimale in formato esadecimale (es: 65 -> 0041)
            const hexString = i.toString(16).toUpperCase().padStart(4, '0');
            infoHex.textContent = hexString;
        });

        // Aggiunge il quadratino appena creato dentro la griglia HTML
        grid.appendChild(box);
    });

    // --- LOGICA PORTFOLIO ---
    const btnBio = document.getElementById('project-bio');
    const bioViewer = document.getElementById('bio-viewer');

    const btnFondazione = document.getElementById('project-fondazione');
    const fondazioneViewer = document.getElementById('fondazione-viewer');

    const btnCantieri = document.getElementById('project-cantieri');
    const subprojectsCantieri = document.getElementById('subprojects-cantieri');

    const btnFonda = document.getElementById('project-fonda');
    const fondaViewer = document.getElementById('fonda-viewer');
    const subprojectsFonda = document.getElementById('subprojects-fonda');
    const btnFondaLibro = document.getElementById('project-fonda-libro');
    const libroViewer = document.getElementById('libro-viewer');
    const btnFondaMappa = document.getElementById('project-fonda-mappa');
    const mappaViewer = document.getElementById('mappa-viewer');
    const btnCantieriLogo = document.getElementById('project-cantieri-logo');
    const logoViewer = document.getElementById('logo-viewer');
    const btnCantieriComunicazione = document.getElementById('project-cantieri-comunicazione');
    const comunicazioneViewer = document.getElementById('comunicazione-viewer');
    const btnCantieriCatalogo = document.getElementById('project-cantieri-catalogo');
    const catalogoViewer = document.getElementById('catalogo-viewer');
    const btnCantieriCca2 = document.getElementById('project-cantieri-cca2');
    const cca2Viewer = document.getElementById('cca2-viewer');
    const btnBoo = document.getElementById('project-boo');
    const booViewer = document.getElementById('boo-viewer');
    const btnLussu = document.getElementById('project-lussu');
    const lussuViewer = document.getElementById('lussu-viewer');

    // Funzione per aggiornare l'allineamento dei viewer attivi
    function updateViewerAlignments() {
        const cantieriViewer = document.getElementById('cantieri-viewer');

        if (window.innerWidth > 900) {
            // Se fondazione è aperto, riallinealo
            if (btnFondazione.classList.contains('active') && !fondazioneViewer.classList.contains('hidden')) {
                const btnRect = btnFondazione.getBoundingClientRect();
                const containerRect = document.querySelector('.sidebar').getBoundingClientRect();
                const offset = btnRect.top - containerRect.top;
                fondazioneViewer.style.marginTop = `${offset}px`;
            }
            // Se bio è aperto, riallinealo
            if (btnBio && btnBio.classList.contains('active') && bioViewer && !bioViewer.classList.contains('hidden')) {
                const btnRect = btnBio.getBoundingClientRect();
                const containerRect = document.querySelector('.sidebar').getBoundingClientRect();
                const offset = btnRect.top - containerRect.top;
                bioViewer.style.marginTop = `${offset}px`;
            }
            // Se cantieri è aperto, riallinealo
            if (btnCantieri && btnCantieri.classList.contains('active') && cantieriViewer && !cantieriViewer.classList.contains('hidden')) {
                const btnRect = btnCantieri.getBoundingClientRect();
                const containerRect = document.querySelector('.sidebar').getBoundingClientRect();
                const offset = btnRect.top - containerRect.top;
                cantieriViewer.style.marginTop = `${offset}px`;
            }
            // Se libro è aperto, riallinealo
            if (btnFondaLibro && btnFondaLibro.classList.contains('active') && libroViewer && !libroViewer.classList.contains('hidden')) {
                const btnRect = btnFondaLibro.getBoundingClientRect();
                const containerRect = document.querySelector('.sidebar').getBoundingClientRect();
                const offset = btnRect.top - containerRect.top;
                libroViewer.style.marginTop = `${offset}px`;
            }
            // Se mappa è aperto, riallinealo
            if (btnFondaMappa && btnFondaMappa.classList.contains('active') && mappaViewer && !mappaViewer.classList.contains('hidden')) {
                const btnRect = btnFondaMappa.getBoundingClientRect();
                const containerRect = document.querySelector('.sidebar').getBoundingClientRect();
                const offset = btnRect.top - containerRect.top;
                mappaViewer.style.marginTop = `${offset}px`;
            }
            // Se fonda è aperto, riallinealo
            if (btnFonda && btnFonda.classList.contains('active') && fondaViewer && !fondaViewer.classList.contains('hidden')) {
                const btnRect = btnFonda.getBoundingClientRect();
                const containerRect = document.querySelector('.sidebar').getBoundingClientRect();
                const offset = btnRect.top - containerRect.top;
                fondaViewer.style.marginTop = `${offset}px`;
            }
            // Se lussu è aperto, riallinealo
            if (btnLussu && btnLussu.classList.contains('active') && lussuViewer && !lussuViewer.classList.contains('hidden')) {
                const btnRect = btnLussu.getBoundingClientRect();
                const containerRect = document.querySelector('.sidebar').getBoundingClientRect();
                const offset = btnRect.top - containerRect.top;
                lussuViewer.style.marginTop = `${offset}px`;
            }
            // Se logo è aperto, riallinealo
            if (btnCantieriLogo && btnCantieriLogo.classList.contains('active') && logoViewer && !logoViewer.classList.contains('hidden')) {
                const btnRect = btnCantieriLogo.getBoundingClientRect();
                const containerRect = document.querySelector('.sidebar').getBoundingClientRect();
                const offset = btnRect.top - containerRect.top;
                logoViewer.style.marginTop = `${offset}px`;
            }
            // Se comunicazione è aperto, riallinealo
            if (btnCantieriComunicazione && btnCantieriComunicazione.classList.contains('active') && comunicazioneViewer && !comunicazioneViewer.classList.contains('hidden')) {
                const btnRect = btnCantieriComunicazione.getBoundingClientRect();
                const containerRect = document.querySelector('.sidebar').getBoundingClientRect();
                const offset = btnRect.top - containerRect.top;
                comunicazioneViewer.style.marginTop = `${offset}px`;
            }
            // Se catalogo è aperto, riallinealo
            if (btnCantieriCatalogo && btnCantieriCatalogo.classList.contains('active') && catalogoViewer && !catalogoViewer.classList.contains('hidden')) {
                const btnRect = btnCantieriCatalogo.getBoundingClientRect();
                const containerRect = document.querySelector('.sidebar').getBoundingClientRect();
                const offset = btnRect.top - containerRect.top;
                catalogoViewer.style.marginTop = `${offset}px`;
            }
            // Se cca2 è aperto, riallinealo
            if (btnCantieriCca2 && btnCantieriCca2.classList.contains('active') && cca2Viewer && !cca2Viewer.classList.contains('hidden')) {
                const btnRect = btnCantieriCca2.getBoundingClientRect();
                const containerRect = document.querySelector('.sidebar').getBoundingClientRect();
                const offset = btnRect.top - containerRect.top;
                cca2Viewer.style.marginTop = `${offset}px`;
            }
            // Se boo è aperto, riallinealo
            if (btnBoo && btnBoo.classList.contains('active') && booViewer && !booViewer.classList.contains('hidden')) {
                const btnRect = btnBoo.getBoundingClientRect();
                const containerRect = document.querySelector('.sidebar').getBoundingClientRect();
                const offset = btnRect.top - containerRect.top;
                booViewer.style.marginTop = `${offset}px`;
            }
            // Aggiungere logica per altri viewer qui in futuro
        } else {
            fondazioneViewer.style.marginTop = '0px';
            if (bioViewer) bioViewer.style.marginTop = '0px';
            if (cantieriViewer) cantieriViewer.style.marginTop = '0px';
            if (fondaViewer) fondaViewer.style.marginTop = '0px';
            if (libroViewer) libroViewer.style.marginTop = '0px';
            if (mappaViewer) mappaViewer.style.marginTop = '0px';
            if (logoViewer) logoViewer.style.marginTop = '0px';
            if (comunicazioneViewer) comunicazioneViewer.style.marginTop = '0px';
            if (catalogoViewer) catalogoViewer.style.marginTop = '0px';
            if (cca2Viewer) cca2Viewer.style.marginTop = '0px';
            if (booViewer) booViewer.style.marginTop = '0px';
        }
    }

    // Logica per Simone Mascia Portfolio (Master)
    const btnMaster = document.getElementById('master-trigger');
    const subprojectsMaster = document.getElementById('subprojects-master');
    const projectMasterLi = document.getElementById('project-master');

    btnMaster.addEventListener('click', (e) => {
        // Evita che cliccare su un figlio (come gli altri progetti o sottomenu) chiuda il menu genitore
        if (e.target.closest('#subprojects-master')) {
            return;
        }

        if (btnMaster.classList.contains('active')) {
            subprojectsMaster.classList.add('hidden');
            btnMaster.classList.remove('active');

            // Nascondi tutti i pannelli dei progetti
            document.querySelectorAll('.viewer-container').forEach(viewer => {
                viewer.classList.add('hidden');
            });

            // Resetta lo stato di TUTTI i progetti (primo e secondo livello)
            document.querySelectorAll('#subprojects-master .project-item').forEach(el => {
                el.classList.remove('active');
                const otherArrow = el.querySelector('.project-arrow');
                if (otherArrow) {
                    if (el.classList.contains('subproject-item')) {
                        otherArrow.textContent = '→ →';
                    } else {
                        otherArrow.textContent = '→';
                    }
                }

                // Se avevano un sottomenu aperto, nascondilo
                const sublist = el.querySelector('.subprojects-list');
                if (sublist) sublist.classList.add('hidden');
            });
        } else {
            subprojectsMaster.classList.remove('hidden');
            btnMaster.classList.add('active');
        }

        updateViewerAlignments();
    });

    // Funzione helper per chiudere gli altri progetti di primo livello
    function closeOtherFirstLevelProjects(currentBtn) {
        const firstLevelProjects = document.querySelectorAll('#subprojects-master > .project-item');
        firstLevelProjects.forEach(el => {
            if (el !== currentBtn) {
                el.classList.remove('active');

                // Cerca la freccia diretta del progetto
                const arrow = el.querySelector('.project-arrow');
                if (arrow) arrow.textContent = '→';

                // Se ha un sottomenu, nascondilo e resetta i suoi figli
                const sublist = el.querySelector('.subprojects-list');
                if (sublist) {
                    sublist.classList.add('hidden');
                    sublist.querySelectorAll('.subproject-item').forEach(sub => {
                        sub.classList.remove('active');
                        const subArrow = sub.querySelector('.project-arrow');
                        if (subArrow) subArrow.textContent = '→ →';
                    });
                }
            }
        });

        // Nascondi tutti i viewer
        document.querySelectorAll('.viewer-container').forEach(viewer => {
            viewer.classList.add('hidden');
        });
    }

    // Logica per Cantieri Culturali Armungia (Sottogruppo)
    btnCantieri.addEventListener('click', (e) => {
        // Evita che cliccare su un sottoprogetto chiuda il menu genitore
        if (e.target.closest('.subproject-item')) {
            return;
        }

        const arrow = btnCantieri.querySelector('.project-arrow');
        const cantieriViewer = document.getElementById('cantieri-viewer');

        if (btnCantieri.classList.contains('active')) {
            subprojectsCantieri.classList.add('hidden');
            btnCantieri.classList.remove('active');
            arrow.textContent = '→';

            // Chiudi eventuali viewer aperti
            document.querySelectorAll('.viewer-container').forEach(viewer => {
                viewer.classList.add('hidden');
            });

            // Resetta lo stato dei sottoprogetti
            subprojectsCantieri.querySelectorAll('.subproject-item').forEach(el => {
                el.classList.remove('active');
                const otherArrow = el.querySelector('.project-arrow');
                if (otherArrow) otherArrow.textContent = '→ →';
            });
        } else {
            closeOtherFirstLevelProjects(btnCantieri);

            subprojectsCantieri.classList.remove('hidden');
            btnCantieri.classList.add('active');
            arrow.textContent = '←';

            if (cantieriViewer) cantieriViewer.classList.remove('hidden');
        }

        // Dopo aver aperto/chiuso il sottomenu, riallinea gli eventuali progetti aperti
        updateViewerAlignments();
    });

    // Logica per Farsi un libro, oggi (Sottogruppo)
    if (btnFonda && subprojectsFonda) {
        btnFonda.addEventListener('click', (e) => {
            if (e.target.closest('.subproject-item')) {
                return;
            }

            const arrow = btnFonda.querySelector('.project-arrow');

            if (btnFonda.classList.contains('active')) {
                subprojectsFonda.classList.add('hidden');
                btnFonda.classList.remove('active');
                arrow.textContent = '→';

                // Chiudi eventuali viewer aperti
                document.querySelectorAll('.viewer-container').forEach(viewer => {
                    viewer.classList.add('hidden');
                });
                // Resetta lo stato dei sottoprogetti
                subprojectsFonda.querySelectorAll('.subproject-item').forEach(el => {
                    el.classList.remove('active');
                    const otherArrow = el.querySelector('.project-arrow');
                    if (otherArrow) otherArrow.textContent = '→ →';
                });
            } else {
                closeOtherFirstLevelProjects(btnFonda);

                subprojectsFonda.classList.remove('hidden');
                btnFonda.classList.add('active');
                arrow.textContent = '←';

                if (fondaViewer) {
                    fondaViewer.classList.remove('hidden');
                }
            }

            updateViewerAlignments();
        });
    }

    // Logica per Fondazione (Progetto con Viewer)
    btnFondazione.addEventListener('click', () => {
        const arrow = btnFondazione.querySelector('.project-arrow');

        if (btnFondazione.classList.contains('active')) {
            fondazioneViewer.classList.add('hidden');
            btnFondazione.classList.remove('active');
            arrow.textContent = '→';
        } else {
            closeOtherFirstLevelProjects(btnFondazione);

            fondazioneViewer.classList.remove('hidden');
            btnFondazione.classList.add('active');
            arrow.textContent = '←';

            updateViewerAlignments();
        }
    });

    // Logica per Libro (Sottoprogetto di Farsi un libro, oggi)
    if (btnFondaLibro && libroViewer) {
        btnFondaLibro.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita di chiudere il sottomenu genitore
            const arrow = btnFondaLibro.querySelector('.project-arrow');

            if (btnFondaLibro.classList.contains('active')) {
                libroViewer.classList.add('hidden');
                btnFondaLibro.classList.remove('active');
                arrow.textContent = '→ →';
            } else {
                // Chiudi gli altri viewer aperti
                document.querySelectorAll('.viewer-container').forEach(viewer => {
                    viewer.classList.add('hidden');
                });

                // Rimuovi active dagli altri sottoprogetti
                document.querySelectorAll('.subproject-item').forEach(el => {
                    el.classList.remove('active');
                    const otherArrow = el.querySelector('.project-arrow');
                    if (otherArrow) otherArrow.textContent = '→ →';
                });

                libroViewer.classList.remove('hidden');
                btnFondaLibro.classList.add('active');
                arrow.textContent = '← ←';

                updateViewerAlignments();
            }
        });
    }

    if (btnFondaMappa && mappaViewer) {
        btnFondaMappa.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita di chiudere il sottomenu genitore
            const arrow = btnFondaMappa.querySelector('.project-arrow');

            if (btnFondaMappa.classList.contains('active')) {
                mappaViewer.classList.add('hidden');
                btnFondaMappa.classList.remove('active');
                arrow.textContent = '→ →';
            } else {
                // Chiudi gli altri viewer aperti
                document.querySelectorAll('.viewer-container').forEach(viewer => {
                    viewer.classList.add('hidden');
                });

                // Rimuovi active dagli altri sottoprogetti
                document.querySelectorAll('.subproject-item').forEach(el => {
                    el.classList.remove('active');
                    const otherArrow = el.querySelector('.project-arrow');
                    if (otherArrow) otherArrow.textContent = '→ →';
                });

                mappaViewer.classList.remove('hidden');
                btnFondaMappa.classList.add('active');
                arrow.textContent = '← ←';

                updateViewerAlignments();
            }
        });
    }

    // Logica per Logo (Sottoprogetto di Cantieri)
    if (btnCantieriLogo && logoViewer) {
        btnCantieriLogo.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita di chiudere il sottomenu genitore
            const arrow = btnCantieriLogo.querySelector('.project-arrow');
            const cantieriViewer = document.getElementById('cantieri-viewer');

            if (btnCantieriLogo.classList.contains('active')) {
                logoViewer.classList.add('hidden');
                btnCantieriLogo.classList.remove('active');
                arrow.textContent = '→ →';

                // Se il menu genitore "Cantieri" è aperto, fai riapparire la sua scritta
                if (btnCantieri && btnCantieri.classList.contains('active') && cantieriViewer) {
                    cantieriViewer.classList.remove('hidden');
                }
            } else {
                // Chiudi gli altri viewer aperti
                document.querySelectorAll('.viewer-container').forEach(viewer => {
                    viewer.classList.add('hidden');
                });

                // Rimuovi active dagli altri sottoprogetti
                document.querySelectorAll('.subproject-item').forEach(el => {
                    el.classList.remove('active');
                    const otherArrow = el.querySelector('.project-arrow');
                    if (otherArrow) otherArrow.textContent = '→ →';
                });

                logoViewer.classList.remove('hidden');
                btnCantieriLogo.classList.add('active');
                arrow.textContent = '← ←';
            }

            updateViewerAlignments();
        });
    }

    // Logica per Comunicazione (Sottoprogetto di Cantieri)
    if (btnCantieriComunicazione && comunicazioneViewer) {
        btnCantieriComunicazione.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita di chiudere il sottomenu genitore
            const arrow = btnCantieriComunicazione.querySelector('.project-arrow');
            const cantieriViewer = document.getElementById('cantieri-viewer');

            if (btnCantieriComunicazione.classList.contains('active')) {
                comunicazioneViewer.classList.add('hidden');
                btnCantieriComunicazione.classList.remove('active');
                arrow.textContent = '→ →';

                // Se il menu genitore "Cantieri" è aperto, fai riapparire la sua scritta
                if (btnCantieri && btnCantieri.classList.contains('active') && cantieriViewer) {
                    cantieriViewer.classList.remove('hidden');
                }
            } else {
                // Chiudi gli altri viewer aperti
                document.querySelectorAll('.viewer-container').forEach(viewer => {
                    viewer.classList.add('hidden');
                });

                // Rimuovi active dagli altri sottoprogetti
                document.querySelectorAll('.subproject-item').forEach(el => {
                    el.classList.remove('active');
                    const otherArrow = el.querySelector('.project-arrow');
                    if (otherArrow) otherArrow.textContent = '→ →';
                });

                comunicazioneViewer.classList.remove('hidden');
                btnCantieriComunicazione.classList.add('active');
                arrow.textContent = '← ←';
            }

            updateViewerAlignments();
        });
    }

    // Carousel per Comunicazione
    const comImagesContainer = document.querySelector('.comunicazione-images');
    if (comImagesContainer) {
        const comImages = comImagesContainer.querySelectorAll('img');
        if (comImages.length > 0) {
            let currentComImage = 0;
            let slideInterval;

            const nextImage = () => {
                comImages[currentComImage].classList.remove('active');
                currentComImage = (currentComImage + 1) % comImages.length;
                comImages[currentComImage].classList.add('active');
            };

            comImagesContainer.addEventListener('click', nextImage);

            comImagesContainer.addEventListener('mouseenter', () => {
                slideInterval = setInterval(nextImage, 800); // Scorre ogni 800ms
            });

            comImagesContainer.addEventListener('mouseleave', () => {
                clearInterval(slideInterval);
            });
        }
    }

    // Logica per Catalogo (Sottoprogetto di Cantieri)
    if (btnCantieriCatalogo && catalogoViewer) {
        btnCantieriCatalogo.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita di chiudere il sottomenu genitore
            const arrow = btnCantieriCatalogo.querySelector('.project-arrow');
            const cantieriViewer = document.getElementById('cantieri-viewer');

            if (btnCantieriCatalogo.classList.contains('active')) {
                catalogoViewer.classList.add('hidden');
                btnCantieriCatalogo.classList.remove('active');
                arrow.textContent = '→ →';

                // Se il menu genitore "Cantieri" è aperto, fai riapparire la sua scritta
                if (btnCantieri && btnCantieri.classList.contains('active') && cantieriViewer) {
                    cantieriViewer.classList.remove('hidden');
                }
            } else {
                // Chiudi gli altri viewer aperti
                document.querySelectorAll('.viewer-container').forEach(viewer => {
                    viewer.classList.add('hidden');
                });

                // Rimuovi active dagli altri sottoprogetti
                document.querySelectorAll('.subproject-item').forEach(el => {
                    el.classList.remove('active');
                    const otherArrow = el.querySelector('.project-arrow');
                    if (otherArrow) otherArrow.textContent = '→ →';
                });

                catalogoViewer.classList.remove('hidden');
                btnCantieriCatalogo.classList.add('active');
                arrow.textContent = '← ←';
            }

            updateViewerAlignments();
        });
    }
    // Logica per CCA Seconda edizione (Sottoprogetto di Cantieri)
    if (btnCantieriCca2 && cca2Viewer) {
        btnCantieriCca2.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita di chiudere il sottomenu genitore
            const arrow = btnCantieriCca2.querySelector('.project-arrow');
            const cantieriViewer = document.getElementById('cantieri-viewer');

            if (btnCantieriCca2.classList.contains('active')) {
                cca2Viewer.classList.add('hidden');
                btnCantieriCca2.classList.remove('active');
                arrow.textContent = '→ →';

                // Se il menu genitore "Cantieri" è aperto, fai riapparire la sua scritta
                if (btnCantieri && btnCantieri.classList.contains('active') && cantieriViewer) {
                    cantieriViewer.classList.remove('hidden');
                }
            } else {
                // Chiudi gli altri viewer aperti
                document.querySelectorAll('.viewer-container').forEach(viewer => {
                    viewer.classList.add('hidden');
                });

                // Rimuovi active dagli altri sottoprogetti
                document.querySelectorAll('.subproject-item').forEach(el => {
                    el.classList.remove('active');
                    const otherArrow = el.querySelector('.project-arrow');
                    if (otherArrow) otherArrow.textContent = '→ →';
                });

                cca2Viewer.classList.remove('hidden');
                btnCantieriCca2.classList.add('active');
                arrow.textContent = '← ←';
            }

            updateViewerAlignments();
        });
    }
    // Logica per BIO (Progetto con Viewer)
    if (btnBio) {
        btnBio.addEventListener('click', () => {
            const arrow = btnBio.querySelector('.project-arrow');

            if (btnBio.classList.contains('active')) {
                bioViewer.classList.add('hidden');
                btnBio.classList.remove('active');
                arrow.textContent = '→';
            } else {
                closeOtherFirstLevelProjects(btnBio);

                bioViewer.classList.remove('hidden');
                btnBio.classList.add('active');
                arrow.textContent = '←';

                updateViewerAlignments();
            }
        });
    }

    // Ricalcola il margine se la finestra viene ridimensionata
    window.addEventListener('resize', updateViewerAlignments);
    const sidebarElement = document.querySelector('.sidebar');
    if (sidebarElement) {
        sidebarElement.addEventListener('scroll', updateViewerAlignments);
    }

    // --- LOGICA TESTO DI PROVA ---
    const fontSizeSlider = document.getElementById('font-size-slider');
    const typeTester = document.getElementById('type-tester');

    if (fontSizeSlider && typeTester) {
        fontSizeSlider.addEventListener('input', (e) => {
            typeTester.style.fontSize = `${e.target.value}px`;
        });
    }

    // --- LOGICA CAMBIO TEMA COLORE ---
    const themeSwitchBtn = document.getElementById('theme-switch-btn');
    if (themeSwitchBtn) {
        themeSwitchBtn.addEventListener('click', () => {
            document.body.classList.toggle('theme-cyan');
        });
    }

    // Logica per Boo
    if (btnBoo) {
        btnBoo.addEventListener('click', () => {
            const arrow = btnBoo.querySelector('.project-arrow');

            if (btnBoo.classList.contains('active')) {
                booViewer.classList.add('hidden');
                btnBoo.classList.remove('active');
                arrow.textContent = '→';
            } else {
                closeOtherFirstLevelProjects(btnBoo);

                booViewer.classList.remove('hidden');
                btnBoo.classList.add('active');
                arrow.textContent = '←';

                updateViewerAlignments();
            }
        });
    }

    // Logica per Emilio Lussu
    if (btnLussu) {
        btnLussu.addEventListener('click', () => {
            const arrow = btnLussu.querySelector('.project-arrow');

            if (btnLussu.classList.contains('active')) {
                lussuViewer.classList.add('hidden');
                btnLussu.classList.remove('active');
                arrow.textContent = '→';
            } else {
                closeOtherFirstLevelProjects(btnLussu);

                lussuViewer.classList.remove('hidden');
                btnLussu.classList.add('active');
                arrow.textContent = '←';

                updateViewerAlignments();
            }
        });
    }

    // --- LOGICA FULLSCREEN MEDIA ---
    const overlay = document.getElementById('fullscreen-overlay');
    const overlayContainer = document.getElementById('fullscreen-content-container');
    const overlayBackBtn = document.getElementById('fullscreen-back-btn');
    const projectContent = document.querySelector('.project-content');

    if (projectContent && overlay && overlayContainer && overlayBackBtn) {
        // Applica cursore a pointer sui media per far capire che sono cliccabili
        const makeMediaClickable = () => {
            document.querySelectorAll('.project-content video, .project-content img').forEach(el => {
                el.style.cursor = 'pointer';
            });
        };
        makeMediaClickable();

        projectContent.addEventListener('click', (e) => {
            const media = e.target.closest('video, img');
            if (!media) return;
            if (media.closest('.postcard')) return; // Esclude le cartoline dal fullscreen

            // Blocca il comportamento di default (evita che iOS apra il player nativo)
            e.preventDefault();
            e.stopPropagation();

            overlayContainer.innerHTML = '';
            const clone = media.cloneNode(true);

            // Ripulisce stili e dimensioni per il fullscreen
            clone.style.width = '100%';
            clone.style.height = '100%';
            clone.style.maxWidth = '100%';
            clone.style.maxHeight = '100%';
            clone.style.border = 'none';
            clone.style.cursor = 'default';

            if (clone.tagName === 'VIDEO') {
                clone.controls = true;
                // Rimuoviamo autoplay sul clone per evitare che Safari lo forzi fullscreen nativo
                clone.removeAttribute('autoplay');
                clone.setAttribute('playsinline', '');
                clone.setAttribute('webkit-playsinline', '');
            }

            overlayContainer.appendChild(clone);
            overlay.classList.remove('hidden');

            // Fai partire il video con un leggero ritardo
            if (clone.tagName === 'VIDEO') {
                setTimeout(() => {
                    clone.play().catch(err => console.log('Autoplay blocked:', err));
                }, 50);
            }
        });

        overlayBackBtn.addEventListener('click', () => {
            overlay.classList.add('hidden');
            overlayContainer.innerHTML = ''; // Ferma e distrugge il video clonato
        });
    }

    // --- LOGICA CUSTOM CURSOR ---
    const customCursorBase = document.getElementById('custom-cursor-base');
    const customCursor = document.getElementById('custom-cursor');

    if (customCursor && customCursorBase) {
        // Nascondi il cursore su mobile/touch devices
        if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
            customCursor.style.display = 'none';
            customCursorBase.style.display = 'none';
        } else {
            document.addEventListener('mousemove', (e) => {
                // Utilizzo di translate3d per accelerazione hardware (ZERO LAG)
                const transformValue = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
                customCursor.style.transform = transformValue;
                customCursorBase.style.transform = transformValue;
            });

            // Effetto hover sugli elementi interattivi (agisce sulla font-size invece che su transform)
            const interactiveSelectors = 'a, button, .red-box, .project-item, .glyph-box, video, img, input, #fullscreen-back-btn';

            document.addEventListener('mouseover', (e) => {
                if (e.target.closest(interactiveSelectors)) {
                    customCursor.style.fontSize = '38px';
                    customCursorBase.style.fontSize = '38px';
                }
            });

            document.addEventListener('mouseout', (e) => {
                if (e.target.closest(interactiveSelectors)) {
                    customCursor.style.fontSize = '20px';
                    customCursorBase.style.fontSize = '20px';
                }
            });
        }
    }

    // --- SISTEMA ORBITA (FLOATING ASSETS) ---
    class OrbitSystem {
        constructor() {
            this.container = document.getElementById('orbit-container');
            this.active = false;
            this.items = [];
            this.maxItems = 15;
            this.spawnInterval = null;
            this.mediaFiles = [];
            this.glyphUnicodes = unicodes; // Usa l'array unicodes definito all'inizio
            this.audio = new Audio('assets/spacelion.mp3');
            this.audio.loop = true;
            this.audio.muted = true; // Impostato in OFF di default all'apertura
            this.audioBtn = document.getElementById('audio-toggle-btn');
            this.audioBtnWrapper = document.getElementById('audio-toggle-wrapper');

            if (this.audioBtn) {
                this.iconOff = document.getElementById('icon-audio-off');
                this.iconOn = document.getElementById('icon-audio-on');
                this.audioBtn.addEventListener('click', () => {
                    if (this.audio.muted) {
                        this.audio.muted = false;
                        if (this.iconOn) this.iconOn.style.display = 'block';
                        if (this.iconOff) this.iconOff.style.display = 'none';
                    } else {
                        this.audio.muted = true;
                        if (this.iconOn) this.iconOn.style.display = 'none';
                        if (this.iconOff) this.iconOff.style.display = 'block';
                    }
                });
            }

            this.loadMedia();
        }

        async loadMedia() {
            try {
                // Generato dallo script aggiorna_orbita.py
                const res = await fetch('orbita_assets.json');
                const data = await res.json();
                this.mediaFiles = data.media;
            } catch (e) {
                console.warn('Orbita: File orbita_assets.json non trovato. Mostrerà solo glifi.');
            }
        }

        start() {
            if (this.active || !this.container) return;
            this.active = true;
            this.container.classList.remove('hidden');

            this.spawnInterval = setInterval(() => this.spawnItem(), 1500);
            this.spawnItem();
            this.spawnItem(); // fai partire due item subito

            if (this.audioBtnWrapper) this.audioBtnWrapper.classList.remove('hidden');

            const playAudio = () => {
                this.audio.play().catch(e => {
                    console.warn('Autoplay bloccato. In attesa del primo click...', e);
                    const resumeAudio = () => {
                        if (this.active) this.audio.play();
                        document.removeEventListener('click', resumeAudio);
                    };
                    document.addEventListener('click', resumeAudio);
                });
            };
            playAudio();
        }

        pause() {
            if (!this.active) return;
            this.active = false;
            this.container.classList.add('hidden');
            clearInterval(this.spawnInterval);

            // if (this.audioBtnWrapper) this.audioBtnWrapper.classList.add('hidden');

            // this.audio.pause();

            // Distruggi gli elementi per risparmiare risorse dopo il fade-out (0.5s CSS)
            setTimeout(() => {
                if (!this.active && this.container) {
                    this.container.innerHTML = '';
                    this.items = [];
                }
            }, 600);
        }

        spawnItem() {
            if (!this.active || this.items.length >= this.maxItems) return;

            // 70% glifi, 30% file media (se esistono)
            const isGlyph = Math.random() < 0.7 || this.mediaFiles.length === 0;

            let el;
            if (isGlyph) {
                el = document.createElement('span');
                el.className = 'orbit-item orbit-glyph';
                const code = this.glyphUnicodes[Math.floor(Math.random() * this.glyphUnicodes.length)];
                el.textContent = String.fromCodePoint(code);
            } else {
                const file = this.mediaFiles[Math.floor(Math.random() * this.mediaFiles.length)];
                if (file.endsWith('.mp4')) {
                    el = document.createElement('video');
                    el.src = file;
                    el.muted = true;
                    el.loop = true;
                    el.autoplay = true;
                    el.playsInline = true;
                    el.className = 'orbit-item';
                } else {
                    el = document.createElement('img');
                    el.src = file;
                    el.className = 'orbit-item';
                }
            }

            // Aggiungi un attributo per evitare che venga rimosso dal timer originale se è stato lanciato
            let isThrown = false;

            this.container.appendChild(el);
            this.items.push(el);

            // Calcola traiettoria casuale fuori dallo schermo
            const side = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
            let startX, startY, endX, endY;
            const w = window.innerWidth;
            const h = window.innerHeight;
            const offset = 250;

            if (side === 0) { startX = Math.random() * w; startY = -offset; endX = Math.random() * w; endY = h + offset; }
            else if (side === 1) { startX = w + offset; startY = Math.random() * h; endX = -offset; endY = Math.random() * h; }
            else if (side === 2) { startX = Math.random() * w; startY = h + offset; endX = Math.random() * w; endY = -offset; }
            else { startX = -offset; startY = Math.random() * h; endX = w + offset; endY = Math.random() * h; }

            const startRot = Math.random() * 360;
            const endRot = startRot + (Math.random() > 0.5 ? 360 : -360);

            // Imposta posizione iniziale
            el.style.transform = `translate3d(${startX}px, ${startY}px, 0) rotate(${startRot}deg)`;

            // Forza reflow per avviare la transizione CSS
            el.offsetHeight;

            // Durata casuale molto lenta (20 - 45 secondi)
            const duration = 20 + Math.random() * 25;
            el.style.transition = `transform ${duration}s linear`;

            // Avvia movimento
            el.style.transform = `translate3d(${endX}px, ${endY}px, 0) rotate(${endRot}deg)`;

            // --- DRAG AND THROW LOGIC ---
            let isDragging = false;
            let startMouseX, startMouseY;
            let startTx, startTy;
            let history = [];
            let currentRotVal = startRot;

            const onMouseDown = (e) => {
                e.preventDefault(); // Previene il drag nativo dell'immagine/testo
                isDragging = true;
                isThrown = true; // Annulla il setTimeout originale

                // Leggi la posizione e rotazione attuali MENTRE la transizione è ancora in corso
                const style = window.getComputedStyle(el);

                // Usiamo un metodo robusto per estrarre la matrice (compatibile con vecchi e nuovi browser)
                const matrixStr = style.transform;

                // Ferma la transizione ORA che abbiamo la posizione salvata
                el.style.transition = 'none';

                let tx = 0, ty = 0;
                if (matrixStr !== 'none') {
                    // matrix3d o matrix
                    const values = matrixStr.split('(')[1].split(')')[0].split(',');
                    if (values.length === 16) {
                        // matrix3d
                        tx = parseFloat(values[12]);
                        ty = parseFloat(values[13]);
                        currentRotVal = Math.atan2(parseFloat(values[1]), parseFloat(values[0])) * (180 / Math.PI);
                    } else if (values.length === 6) {
                        // matrix
                        tx = parseFloat(values[4]);
                        ty = parseFloat(values[5]);
                        currentRotVal = Math.atan2(parseFloat(values[1]), parseFloat(values[0])) * (180 / Math.PI);
                    }
                }

                startTx = tx;
                startTy = ty;

                // Fissa l'elemento nella sua posizione attuale per evitare che schizzi alla fine
                el.style.transform = `translate3d(${startTx}px, ${startTy}px, 0) rotate(${currentRotVal}deg)`;

                startMouseX = e.clientX;
                startMouseY = e.clientY;
                history = [{ x: startMouseX, y: startMouseY, time: performance.now() }];

                document.addEventListener('mousemove', onMouseMove);
                document.addEventListener('mouseup', onMouseUp);
            };

            const onMouseMove = (e) => {
                if (!isDragging) return;
                const dx = e.clientX - startMouseX;
                const dy = e.clientY - startMouseY;

                const newTx = startTx + dx;
                const newTy = startTy + dy;

                el.style.transform = `translate3d(${newTx}px, ${newTy}px, 0) rotate(${currentRotVal}deg)`;

                history.push({ x: e.clientX, y: e.clientY, time: performance.now() });
                if (history.length > 5) history.shift();
            };

            const onMouseUp = (e) => {
                if (!isDragging) return;
                isDragging = false;
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);

                // Se c'è solo il click o non si è mosso, fallo ripartire piano
                if (history.length <= 1) {
                    history.push({ x: e.clientX, y: e.clientY + 1, time: performance.now() + 10 }); // finta velocità bassissima
                }

                const oldest = history[0];
                const newest = history[history.length - 1];
                const dt = newest.time - oldest.time || 1;
                const vx = (newest.x - oldest.x) / dt; // pixel per ms
                const vy = (newest.y - oldest.y) / dt;

                // Leggi la posizione di sgancio
                const style = window.getComputedStyle(el);
                const matrixStr = style.transform;
                let currentTx = startTx;
                let currentTy = startTy;

                if (matrixStr !== 'none') {
                    const values = matrixStr.split('(')[1].split(')')[0].split(',');
                    if (values.length === 16) {
                        currentTx = parseFloat(values[12]);
                        currentTy = parseFloat(values[13]);
                    } else if (values.length === 6) {
                        currentTx = parseFloat(values[4]);
                        currentTy = parseFloat(values[5]);
                    }
                }

                const speed = Math.sqrt(vx * vx + vy * vy);

                let finalTargetX = currentTx;
                let finalTargetY = currentTy;
                let finalDuration = 5;

                if (speed < 0.1) {
                    // Se l'utente l'ha solo spostato o cliccato senza lanciarlo, continua a farlo uscire piano
                    finalTargetX = currentTx + (endX - currentTx) * 1.5;
                    finalTargetY = currentTy + (endY - currentTy) * 1.5;
                    finalDuration = 15;
                } else {
                    // Lancio veloce!
                    const multiplier = 3000; // quanta inerzia
                    finalTargetX = currentTx + vx * multiplier;
                    finalTargetY = currentTy + vy * multiplier;

                    const dist = Math.sqrt(Math.pow(finalTargetX - currentTx, 2) + Math.pow(finalTargetY - currentTy, 2));
                    // Durata calcolata in base alla velocità, limitata tra 0.5s e 3s
                    finalDuration = Math.min(Math.max(dist / (speed * 1000), 0.5), 3);
                }

                el.offsetHeight; // force reflow
                // Applica una transizione ease-out per simulare l'attrito del lancio
                el.style.transition = `transform ${finalDuration}s cubic-bezier(0.1, 0.7, 0.1, 1)`;
                el.style.transform = `translate3d(${finalTargetX}px, ${finalTargetY}px, 0) rotate(${currentRotVal + (vx > 0 ? 360 : -360)}deg)`;

                // Rimuovi dopo il lancio
                setTimeout(() => {
                    if (el && el.parentNode) {
                        el.parentNode.removeChild(el);
                        this.items = this.items.filter(i => i !== el);
                    }
                }, finalDuration * 1000);
            };

            el.addEventListener('mousedown', onMouseDown);

            // Rimuovi alla fine (se non è stato lanciato dall'utente)
            setTimeout(() => {
                if (!isThrown && el && el.parentNode) {
                    el.parentNode.removeChild(el);
                    this.items = this.items.filter(i => i !== el);
                }
            }, duration * 1000);
        }
    }

    const orbit = new OrbitSystem();

    // Ascolta i cambiamenti di classe per capire quando i progetti vengono aperti/chiusi
    const projectsList = document.querySelector('.projects-list');
    if (projectsList) {
        const observer = new MutationObserver(() => {
            const activeProjects = Array.from(document.querySelectorAll('.project-item.active'))
                .filter(item => item.id !== 'project-bio');

            if (activeProjects.length === 0) {
                orbit.start();
            } else {
                orbit.pause();
            }
        });

        observer.observe(projectsList, { subtree: true, attributes: true, attributeFilter: ['class'] });
    }

    // Controlla lo stato iniziale
    const initialActive = Array.from(document.querySelectorAll('.project-item.active'))
        .filter(item => item.id !== 'project-bio');

    if (initialActive.length === 0) {
        orbit.start();
    }

    // Scorri in alto quando si apre un nuovo progetto
    document.querySelectorAll('.project-item').forEach(item => {
        item.addEventListener('click', () => {
            setTimeout(() => {
                if (item.classList.contains('active')) {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }, 10);
        });
    });

    // Applica vedove e orfane (sostituisce spazio con spazio insecabile)
    applyWidowsOrphans();
});

function applyWidowsOrphans() {
    const words = ['il', 'vi', 'era', 'fare', 'dire', 'pur', 'fra', 'stato', 'quel', 'ai', 'ciò', 'anche', 'dallo', 'ad', 'mi', 'ogni', 'sul', 'su', 'sua', 'fosse', 'sulla', 'quella', 'quello', 'tutta', 'essa', 'esso', 'suo', 'sia', 'quei', 'dalla', 'sono', 'tutti', 'più', 'tutto', 'poi', 'della', 'con', 'come', 'fa', 'ma', 'nella', 'ha', 'ho', 'ci', 'in', 'lo', 'alla', 'ed', 'delle', 'al', 'nel', 'dei', 'Ne', 'tra', 'cui', 'la', 'dal', 'da', 'i', 'di', 'gli', 'del', 'le', 'un', 'uno', 'una', 'per', 'si', 'è', 'a', 'non', 'che', 'o', 'e'];

    // Ordina dalla più lunga alla più corta
    words.sort((a, b) => b.length - a.length);

    // Usa una regex con inizio riga o spazio/punteggiatura seguito dalla parola e da uno spazio
    const regex = new RegExp(`(^|\\s|['"‘“(\\[])(${words.join('|')})\\s+`, 'gi');

    function replaceTextInNode(node) {
        if (node.nodeType === 3) {
            let original = node.nodeValue;
            let replaced = original;
            let previous = '';
            // Finché avvengono sostituzioni (per coprire le sovrapposizioni es. " a e o ")
            while (previous !== replaced) {
                previous = replaced;
                // \u00A0 è il carattere per &nbsp; (non-breaking space)
                replaced = replaced.replace(regex, '$1$2\u00A0');
            }
            if (replaced !== original) {
                node.nodeValue = replaced;
            }
        } else if (node.nodeType === 1) {
            const tag = node.tagName.toLowerCase();
            if (!['script', 'style', 'textarea', 'input', 'noscript'].includes(tag)) {
                for (let i = 0; i < node.childNodes.length; i++) {
                    replaceTextInNode(node.childNodes[i]);
                }
            }
        }
    }

    replaceTextInNode(document.body);
}

// --- BOOK FLIP LOGIC ---
window.currentBookZIndex = 100;
window.turnBookPage = function (page) {
    page.classList.toggle('turned');
    window.currentBookZIndex++;
    page.style.zIndex = window.currentBookZIndex;
};