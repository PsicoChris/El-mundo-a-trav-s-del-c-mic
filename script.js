document.addEventListener('DOMContentLoaded', () => {
            const appData = {
                eras: [
                    {
                        id: 'golden',
                        name: 'Edad de Oro',
                        dates: 'c. 1938-1956',
                        summary: 'Los cimientos de la industria, definidos por narrativas escapistas y limitaciones tecnológicas. El arte era simple, directo y funcional, enfocado en la claridad de la historia sobre la complejidad visual.',
                        visuals: [
                            { icon: '🎨', text: 'Colores planos y primarios debido a la impresión con puntos Ben-Day.' },
                            { icon: '👤', text: 'Figuras caricaturescas y de anatomía simple.' },
                            { icon: '📖', text: 'Diseños de página en cuadrículas rígidas y viñetas pequeñas.' }
                        ],
                        artists: [
                            { name: 'Joe Shuster', contribution: 'Co-creador de Superman, su estilo definió al arquetipo del superhéroe temprano.' },
                            { name: 'Jack Kirby', contribution: 'En sus inicios, aportó un dinamismo sin precedentes que evolucionaría en eras posteriores.' }
                        ],
                        forces: [
                            { icon: '⚙️', title: 'Tecnología de Impresión', description: 'El uso de puntos Ben-Day y papel de periódico barato limitaba la paleta a 64 colores planos y afectaba la nitidez.' },
                            { icon: '🌍', title: 'Contexto Cultural', description: 'El escapismo de la Gran Depresión y la Segunda Guerra Mundial favoreció historias heroicas y sencillas.' },
                            { icon: '🏪', title: 'Modelo de Distribución', description: 'Venta masiva en quioscos, lo que requería una producción rápida y económica.' }
                        ],
                        chartData: [3, 2, 2, 3] // Realismo, Complejidad Color, Dinamismo Viñeta, Influencia Externa
                    },
                    {
                        id: 'silver',
                        name: 'Edad de Plata',
                        dates: 'c. 1956-1970',
                        summary: 'Un resurgimiento de los superhéroes con mayor profundidad psicológica. El arte se vuelve más dinámico y expresivo, influenciado por la cultura pop y una mejora en las técnicas de impresión.',
                        visuals: [
                            { icon: '🎨', text: 'Colores más brillantes y vibrantes, influenciados por el Pop Art.' },
                            { icon: '👤', text: 'Figuras más tridimensionales y con mayor expresividad emocional.' },
                            { icon: '📖', text: 'Primeros experimentos rompiendo la rigidez de la cuadrícula para mayor acción.' }
                        ],
                        artists: [
                            { name: 'Steve Ditko', contribution: 'Co-creador de Spider-Man, con un estilo único y a veces surrealista.' },
                            { name: 'Jack Kirby', contribution: 'Su trabajo en Marvel definió un nuevo estándar de acción cósmica y dinamismo.' }
                        ],
                        forces: [
                            { icon: '⚙️', title: 'Tecnología de Impresión', description: 'Mejoras graduales permitieron colores más vivos, aunque todavía basados en separación manual.' },
                            { icon: '🌍', title: 'Contexto Cultural', description: 'La influencia del Pop Art y la contracultura introdujeron nuevas sensibilidades visuales.' },
                            { icon: '🏪', title: 'Modelo de Distribución', description: 'Los quioscos seguían dominando, pero el medio ganaba legitimidad artística.' }
                        ],
                        chartData: [5, 4, 5, 6]
                    },
                    {
                        id: 'bronze',
                        name: 'Edad de Bronce',
                        dates: 'c. 1970-1985',
                        summary: 'Una era de madurez narrativa, abordando temas sociales complejos. El arte se tornó más realista y crudo, con un enfoque en la anatomía y la composición cinematográfica para reflejar la seriedad de las historias.',
                        visuals: [
                            { icon: '🎨', text: 'Tonos más sombríos y profundos para adaptarse a narrativas más oscuras.' },
                            { icon: '👤', text: 'Realismo anatómico y proporciones humanas más precisas.' },
                            { icon: '📖', text: 'Composiciones cinematográficas, con mayor uso de la profundidad y la iluminación.' }
                        ],
                        artists: [
                            { name: 'Neal Adams', contribution: 'Aportó un fotorrealismo y dramatismo sin precedentes, revolucionando el arte del cómic.' },
                            { name: 'Frank Miller', contribution: 'Introdujo una sensibilidad noir y un estilo crudo y de alto contraste.' }
                        ],
                        forces: [
                            { icon: '⚙️', title: 'Tecnología de Impresión', description: 'La introducción del "papel Baxter" a finales de la era permitió una impresión más nítida y colores más fieles.' },
                            { icon: '�', title: 'Contexto Cultural', description: 'El comentario social y las narrativas crudas ("gritty") demandaban un arte más realista.' },
                            { icon: '🏪', title: 'Modelo de Distribución', description: 'El auge del "Mercado Directo" (tiendas de cómics) dio más libertad creativa a los artistas.' }
                        ],
                        chartData: [8, 6, 7, 7]
                    },
                    {
                        id: 'modern',
                        name: 'Edad Moderna',
                        dates: 'c. 1985-2000',
                        summary: 'Consolidación de la revolución digital y auge de estilos "extremos". El arte se volvió más cinematográfico, con énfasis en el impacto dramático de las viñetas grandes y figuras hiper-musculosas.',
                        visuals: [
                            { icon: '🎨', text: 'Coloreado digital inicial con paletas amplias y gradientes básicos.' },
                            { icon: '👤', text: 'Figuras hiper-musculosas y anatomía detallada, a menudo exagerada.' },
                            { icon: '📖', text: 'Uso creciente de splash pages y spreads para un impacto visual.' }
                        ],
                        artists: [
                            { name: 'Todd McFarlane', contribution: 'Estilo hiperdetallado y enérgico que definió una era en los 90s con Spawn y Spider-Man.' },
                            { name: 'Jim Lee', contribution: 'Aportó una calidad elegante y cinematográfica, con un dominio de la anatomía y la acción.' }
                        ],
                        forces: [
                            { icon: '⚙️', title: 'Tecnología Digital', description: 'Primeras versiones de software de coloreado digital (ej. Photoshop) y mejora de la calidad del papel (Baxter).' },
                            { icon: '🌍', title: 'Contexto Cultural', description: 'Influencia del cine de acción y el deseo de un arte más "extremo" y dinámico.' },
                            { icon: '🏪', title: 'Modelo de Distribución', description: 'Consolidación del Mercado Directo y surgimiento de editoriales independientes.' }
                        ],
                        chartData: [9, 9, 9, 8]
                    },
                    {
                        id: 'contemporary',
                        name: 'Edad Contemporánea',
                        dates: 'c. 2000-Presente',
                        summary: 'Diversificación extrema de estilos y experimentación con nuevos formatos digitales. El arte se vuelve aún más pulido, globalizado y con un énfasis en la narrativa gráfica y la accesibilidad en diversas plataformas.',
                        visuals: [
                            { icon: '🎨', text: 'Coloreado digital avanzado con texturas complejas, iluminación sofisticada y efectos de partículas.' },
                            { icon: '👤', text: 'Gran variedad de estilos, desde el minimalista hasta el hiperrealista, con foco en la expresividad.' },
                            { icon: '📖', text: 'Experimentación con paneles no tradicionales y formatos adaptados a la lectura digital (ej. scroll vertical en webtoons).' }
                        ],
                        artists: [
                            { name: 'Fiona Staples', contribution: 'Reconocida por su estilo distintivo y su uso innovador del color en series como Saga.' },
                            { name: 'Artistas Webcomic', contribution: 'Una nueva generación de creadores que exploran formatos digitales y estilos diversos para audiencias globales.' }
                        ],
                        forces: [
                            { icon: '⚙️', title: 'Proliferación Digital', description: 'Herramientas de dibujo digital avanzadas, tabletas gráficas y software de edición que permiten una complejidad sin precedentes.' },
                            { icon: '🌍', title: 'Globalización y Diversidad', description: 'Creciente influencia del manga, el cómic europeo y una mayor atención a la diversidad y representación en las historias y el arte.' },
                            { icon: '🏪', title: 'Distribución Digital', description: 'Auge de plataformas de webtoons, cómics digitales y novelas gráficas en librerías, ampliando el alcance del medio.' }
                        ],
                        chartData: [9, 10, 10, 10]
                    }
                ]
            };

            let currentEraId = 'golden';
            let eraChart = null;

            const timelineNav = document.getElementById('timeline-nav').querySelector('.flex');

            function init() {
                createTimeline();
                createChart();
                updateContent();
            }

            function createTimeline() {
                timelineNav.innerHTML = ''; // Clear existing timeline items
                appData.eras.forEach(era => {
                    const item = document.createElement('div');
                    item.className = 'timeline-item flex-1 flex flex-col items-center text-center px-2';
                    item.dataset.id = era.id;
                    item.innerHTML = `
                        <div class="relative">
                            <div class="dot w-6 h-6 rounded-full bg-gray-400 border-4 border-[#FDF6E3] transition-all duration-300"></div>
                        </div>
                        <p class="era-name mt-2 font-bebas text-xl md:text-2xl text-gray-600 tracking-wide">${era.name}</p>
                    `;
                    item.addEventListener('click', () => {
                        currentEraId = era.id;
                        updateContent();
                    });
                    timelineNav.appendChild(item);
                });
            }

            function updateContent() {
                const era = appData.eras.find(e => e.id === currentEraId);

                document.getElementById('era-title').textContent = era.name;
                document.getElementById('era-dates').textContent = era.dates;
                document.getElementById('era-summary').textContent = era.summary;

                const visualsList = document.getElementById('era-visuals');
                visualsList.innerHTML = era.visuals.map(v => `
                    <li class="flex items-start">
                        <span class="text-2xl mr-3">${v.icon}</span>
                        <span>${v.text}</span>
                    </li>
                `).join('');

                const artistsContainer = document.getElementById('era-artists');
                artistsContainer.innerHTML = era.artists.map(a => `
                    <div>
                        <h4 class="font-bold text-lg text-gray-900">${a.name}</h4>
                        <p class="text-gray-600">${a.contribution}</p>
                    </div>
                `).join('');

                const forcesContainer = document.getElementById('era-forces');
                forcesContainer.innerHTML = era.forces.map(f => `
                    <div class="flex items-start">
                        <span class="text-3xl mr-4">${f.icon}</span>
                        <div>
                            <h4 class="font-bold text-lg text-gray-900">${f.title}</h4>
                            <p class="text-gray-600">${f.description}</p>
                        </div>
                    </div>
                `).join('');

                document.querySelectorAll('.timeline-item').forEach(item => {
                    item.classList.toggle('active', item.dataset.id === currentEraId);
                });

                updateChartHighlight();
            }

            function createChart() {
                const ctx = document.getElementById('eraComparisonChart').getContext('2d');
                const labels = ['Realismo', 'Complejidad de Color', 'Dinamismo de Viñeta', 'Influencia Externa'];
                const datasets = appData.eras.map(era => ({
                    label: era.name,
                    data: era.chartData,
                    fill: true,
                    backgroundColor: 'rgba(214, 69, 69, 0.1)',
                    borderColor: 'rgba(214, 69, 69, 0.5)',
                    pointBackgroundColor: 'rgba(214, 69, 69, 0.5)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(214, 69, 69, 1)',
                    borderWidth: 2,
                }));

                if (eraChart) {
                    eraChart.destroy(); // Destroy existing chart before creating a new one
                }

                eraChart = new Chart(ctx, {
                    type: 'radar',
                    data: {
                        labels: labels,
                        datasets: datasets
                    },
                    options: {
                        maintainAspectRatio: false,
                        scales: {
                            r: {
                                angleLines: {
                                    color: 'rgba(0, 0, 0, 0.1)'
                                },
                                grid: {
                                    color: 'rgba(0, 0, 0, 0.1)'
                                },
                                pointLabels: {
                                    font: {
                                        size: 12,
                                        family: 'Roboto'
                                    },
                                    color: '#333'
                                },
                                ticks: {
                                    beginAtZero: true,
                                    max: 10,
                                    stepSize: 2,
                                    backdropColor: 'rgba(253, 246, 227, 0.75)'
                                }
                            }
                        },
                        plugins: {
                            legend: {
                                display: false
                            },
                             tooltip: {
                                callbacks: {
                                    label: function(context) {
                                        let label = context.dataset.label || '';
                                        if (label) {
                                            label += ': ';
                                        }
                                        if (context.parsed.r !== null) {
                                            label += context.parsed.r;
                                        }
                                        return label;
                                    }
                                }
                            }
                        }
                    }
                });
            }
            
            function updateChartHighlight() {
                if (!eraChart) return;
                const activeIndex = appData.eras.findIndex(e => e.id === currentEraId);
                
                eraChart.data.datasets.forEach((dataset, index) => {
                    if (index === activeIndex) {
                        dataset.backgroundColor = 'rgba(214, 69, 69, 0.4)';
                        dataset.borderColor = 'rgba(214, 69, 69, 1)';
                        dataset.borderWidth = 3;
                        dataset.pointBackgroundColor = 'rgba(214, 69, 69, 1)';
                    } else {
                        dataset.backgroundColor = 'rgba(128, 128, 128, 0.1)';
                        dataset.borderColor = 'rgba(128, 128, 128, 0.4)';
                        dataset.borderWidth = 1.5;
                        dataset.pointBackgroundColor = 'rgba(128, 128, 128, 0.4)';
                    }
                });
                eraChart.update();
            }

            init();
        });
