const products = [
  {
    name: "PATENTKALI",
    description:
      "Fertilizante complejo altamente concentrado de potasio, azufre y magnesio en forma sulfatada. Apto para la agricultura orgánica y convencional.",
    benefits:
      "Balance ideal de potasio, azufre y magnesio para lograr en la planta el mejor estado fitosanitario y calidad de cosecha. Contiene todos los nutrientes en una forma sulfatada de origen natural (kieserita) rápidamente soluble en agua y completamente disponible para las plantas. Extraído de depósitos naturales de sal cruda en Alemania. Aprobado para su uso en agricultura ecológica. El potasio mejora la tolerancia al estrés por sequía, el magnesio incrementa la fotosíntesis, y participa en procesos de defensa de la planta, y el azufre es esencial para la síntesis de proteínas. Prácticamente libre de cloruros (máx. 3% Cl) y actúa independientemente del valor de pH del suelo y no lo modifica.",
    composition: {
      Potasio: "30.0%",
      Magnesio: "10.0%",
      Azufre: "17.0%",
    },
    countries: ["Colombia", "Bolivia", "Argentina"],
    cultivation: ["Café", "Caña de azúcar", "Canabis", "Cereales", "Cacao"],
    image: "productsImg/patentkali.png",
    hierarchy: "Fertilizante edáfico granulado",
  },
  {
    name: "MAP AVAIL",
    description:
      "Fuente de fósforo (P) recubierto con el polímero AVAIL T5 que gracias a su carga altamente negativa retiene iones que fijan el P en el suelo y aumenta su disponibilidad para la planta.",
    benefits:
      "La alta densidad de carga del polímero AVAIL T5 favorece la adsorción de los cationes polivalentes metálicos presentes en la solución del suelo, interrumpiendo y retrasando las reacciones normales de fijación de P, obteniéndose así una mayor disponibilidad de fósforo para la planta. El recubrimiento con el polímero AVAIL reduce la conversión de fósforo soluble a formas menos solubles, reduciendo las pérdidas de fósforo en suelo. Más fósforo disponible puede conducir a un crecimiento rápido y temprano de las plantas, así como a cultivos más sanos y con mayor potencial de rendimiento. El aporte de N y P favorece el crecimiento y desarrollo de los cultivos. Gracias a su alto contenido de fósforo favorece el desarrollo de raíces y su aporte de nitrógeno permite cubrir las necesidades del cultivo durante las primeras etapas de crecimiento. El fósforo MAP es una fuente confiable de nutrientes, asegurando un suministro constante para los cultivos.",
    composition: {
      "Nitrógeno total (N)": "10.0%",
      "Nitrógeno amoniacal (N)": "10.0%",
      "Fósforo asimilable (P2O5)": "50.0%",
    },
    countries: [
      "Bolivia",
      "Colombia",
      "Ecuador",
      "Panamá",
      "Perú",
      "Venezuela",
    ],
    cultivation: [
      "Aguacate",
      "Arroz",
      "Banano",
      "Café",
      "Cannabis Medicinal",
      "Esparrago",
      "Maíz",
      "Mango",
      "Palma de Aceite",
      "Papa",
      "Cultivos en desarrollo",
    ],
    image: "productsImg/mapavail.png",
    hierarchy: "Fertilizante edáfico granulado",
  },
  {
    name: "Urea Nutrisphere",
    description:
      "Urea granulada recubierta con el polímero NUE CHARGE que protege al Nitrógeno evitando pérdidas en el suelo por lixiviación, volatilización o desnitrificación.",
    benefits:
      "Mayor disponibilidad de nitrógeno para la planta gracias a que el polímero N-Charge de la Urea Nutrisphere retiene tres iones polivalentes (Fe, Ni y Cu) involucrados en los procesos de pérdidas de nitrógeno en suelo: lixiviación, volatilización y/o desnitrificación. Mayor tiempo de disponibilidad del nitrógeno, para que las raíces del cultivo lo absorban en una mayor cantidad. Fertilizante que proporciona un alto contenido de nitrógeno, nutriente esencial en el crecimiento y desarrollo vegetativo de la planta. La Urea Nutrisphere mantiene el nitrógeno de forma amoniacal más estable en el suelo, permitiendo una mejor nutrición en los cultivos y mayores rendimientos.",
    composition: {
      "Nitrogeno total (N)": "46.0%",
      "Nitrogeno Ureico (N)": "46.0%",
    },
    countries: [
      "Bolivia",
      "Colombia",
      "Ecuador",
      "Panamá",
      "Perú",
      "Venezuela",
    ],
    cultivation: [
      "Arroz",
      "Banano",
      "Café",
      "Flores",
      "Maíz",
      "Mango",
      "Palma de Aceite",
      "Papa",
      "Cultivos en desarrollo",
    ],
    image: "productsImg/urea.png",
    hierarchy: "Fertilizante edáfico granulado",
  },
  {
    name: "Equilibrio pH GR",
    description:
      "Permite neutralizar el aluminio tóxico (Al3+) de la solución del suelo, incrementar los niveles de pH, aportar a la fertilización de la planta y mejora la disponibilidad de los demás nutrientes.",
    benefits:
      "Su tamaño de partícula (Malla 100) permite una rápida reacción en el suelo. Tiene la relación ideal de bases Ca y Mg. Mejora las propiedades químicas del suelo (desbloquea fósforo y elementos fijados, disminuye la acidez). Mejora el pH de los suelos, ya que intercambia los H+ libres en el medio, permitiendo el desbloqueo de nutrientes. Aporta mayor proporción de Ca en suelos magnesianos o con relaciones Ca/Mg estrechas.",
    composition: {
      "Calcio (CaO)": "34.0%",
      "Magnesio (MgO)": "13.0%",
      "Azufre (S)": "3.0%",
      "Silicio (SiO2)": "16.0%",
    },
    countries: [
      "Bolivia",
      "Colombia",
      "Ecuador",
      "Panamá",
      "Perú",
      "Venezuela",
    ],
    cultivation: [
      "Café",
      "Maíz",
      "Banano",
      "Palma de Aceite",
      "Aguacate",
      "Papa",
      "Soya",
      "Arroz",
      "Frutales",
    ],
    image: "productsImg/patentkali.png",
    hierarchy: "Edáficos",
  },
  {
    name: "Equilibrio Pentax",
    description:
      "Permite neutralizar el aluminio tóxico (Al3+) de la solución del suelo, incrementar los niveles de pH, aportar a la fertilización de la planta y mejora la disponibilidad de los demás nutrientes.",
    benefits:
      "Su tamaño de partícula (Malla 100) permite una rápida reacción en el suelo. Tiene la relación ideal de bases Ca y Mg. Mejora las propiedades químicas del suelo (desbloquea fósforo y elementos fijados, disminuye la acidez). Aumenta la capacidad de intercambio catiónico en los suelos. Aumenta la retención de nutrientes, mejorando la eficiencia en las aplicaciones de los fertilizantes en el suelo. Mejora el pH de los suelos ya que intercambia los H+ libres en el medio permitiendo el desbloqueo de nutrientes. Ideales para suelos con relaciones Ca/Mg balanceadas.",
    composition: {
      "fósforo (P2O5)": "3.0%",
      "Calcio (CaO)": "31.0%",
      "Magnesio (MgO)": "15.0%",
      "Azufre (S)": "3.0%",
      "Silicio (SiO2)": "15.0%",
    },
    countries: [
      "Bolivia",
      "Colombia",
      "Ecuador",
      "Panamá",
      "Perú",
      "Venezuela",
    ],
    cultivation: [
      "Café",
      "Maíz",
      "Banano",
      "Palma de Aceite",
      "Aguacate",
      "Papa",
      "Soya",
      "Arroz",
      "Frutales",
    ],
    image: "productsImg/patentkali.png",
    hierarchy: "Edáficos",
  },
  {
    name: "Fylloton",
    description:
      "Promotor del crecimiento de la planta a base de aminoácidos de origen vegetal y algas marinas.",
    benefits:
      "Promueve el desarrollo vegetativo y la recuperación de la planta en situaciones de estrés. Fuente de aminoácidos vegetales obtenidos por hidrólisis enzimática, un proceso que mantiene inalterada su estructura y su funcionalidad. Complementado con algas marinas ricas en promotores naturales del crecimiento. Contiene triptófano, precursor natural de las auxinas, además estimula la síntesis de proteínas y promotores del crecimiento vegetal. Favorece el ahorro energético y la actividad metabólica haciendo que las plantas sigan creciendo aún en condiciones de estrés. Potencia la eficacia de ingredientes activos de herbicidas, fitorreguladores, bioestimulantes facilitando la penetración en los tejidos y reduciendo los efectos colaterales.",
    composition: {
      "Nitrogeno organico": "83 g/L",
      "Carbono organico": "251 g/L",
    },
    countries: [
      "Bolivia",
      "Colombia",
      "Ecuador",
      "Panamá",
      "Perú",
      "Venezuela",
    ],
    cultivation: [
      "Hortalizas",
      "Arroz",
      "Maíz",
      "Frutales",
      "Solanaceas",
      "Flores de corte",
      "Perennes",
      "Gramineas",
      "Musaceas",
    ],
    image: "productsImg/fylloton.png",
    hierarchy: "Fertilizante foliar",
  },
  {
    name: "Folicist",
    description:
      "Bioestimulante potenciador metabólico de la floración, cuajado, formación de semillas y calidad de frutos. Con efecto antiestrés.",
    benefits:
      "Bioestimulante potencializador del metabolismo de las plantas recomendado para agricultura convencional y orgánica. Optimiza y uniformiza la floración, promueve la germinación del polen y el cuajado de frutos, y estimula el metabolismo de la planta durante las fases reproductivas. Por su formulación tiene un alto efecto antiestrés, contribuye al crecimiento vegetativo y productivo de la planta, y a la buena calidad de las cosechas. Sus diferentes componentes aportan varios beneficios a la planta: Ácido fólico: promueve la síntesis de proteínas y ácidos nucleicos para la división celular. Glicin-betaína: asegura la recuperación frente al estrés metabólico de floración y cuajado. Extractos vegetales: suministran aminoácidos, vitaminas y reguladores del crecimiento. Extractos de algas marinas: suministran reguladores del crecimiento.",
    composition: {
      "Nitrogeno organico": "27 g/L",
      "Potasio soluble": "74 g/L",
      "Carbono organico": "118 g/L",
    },
    countries: [
      "Bolivia",
      "Colombia",
      "Ecuador",
      "Panamá",
      "Perú",
      "Venezuela",
    ],
    cultivation: [
      "Frutales",
      "Solanaceas",
      "Flores de corte",
      "Perennes",
      "Gramineas",
      "Musaceas",
      "Soya",
    ],
    image: "productsImg/follicist.png",
    hierarchy: "Fertilizante foliar",
  },
  {
    name: "Kellus Copper",
    description:
      "Fuente de cobre quelatado con EDTA, altamente eficiente para aplicación foliar y fertirriego, previene y cura deficiencias de cobre.",
    benefits:
      "Presenta efecto INOX un aditivo fisiológico que mantiene a las plantas en los más altos niveles de rendimiento. Previene y cura deficiencias de cobre creando lignina en las paredes celulares. La aplicación foliar permite una rápida absorción y transporte del cobre a través de las hojas, facilitando su distribución en toda la planta, ayudando a formar lignina que proporciona un soporte a la planta para que pueda mantener su forma vertical. Tiene muy alta solubilidad (12 kg/10 litros de agua), con excelente estabilidad y compatibilidad en solución. Cobre 100% quelatado con EDTA. Permiten el aporte equilibrado de Cobre, para prevenir y corregir deficiencias de este elemento en las plantas. Máxima actividad fisiológica y nutricional de las plantas para explorar su potencial productivo. Reduce los efectos ocasionados por los diversos estreses, generando un mayor aprovechamiento de la fotosíntesis y energía por parte de las plantas.",
    composition: {
      "Cobre quelatado (Cu)": "14.5%",
    },
    countries: [
      "Bolivia",
      "Colombia",
      "Ecuador",
      "Panamá",
      "Perú",
      "Venezuela",
    ],
    cultivation: [
      "Hortalizas",
      "Flores de Corte",
      "Papa",
      "Frutales",
      "Berries",
    ],
    image: "productsImg/kellus-copper.png",
    hierarchy: "Fertilizante soluble",
  },
  {
    name: "Solupotasse",
    description:
      "Sulfato de potasio hidrosoluble de alta eficiencia para la fertilización en sistemas de fertirriego.",
    benefits:
      "Proporciona una forma altamente soluble de potasio y azufre en forma de sulfato y puede utilizarse para fertirrigación en una amplia variedad de cultivos. Se disuelve rápida y completamente sin dejar residuos. La solución un pH más bajo mejora la disponibilidad para la planta del fósforo, hierro y la mayoría de los micronutrientes. Índice de salinidad extremadamente bajo. Mejora el rendimiento y la calidad de los cultivos. Prácticamente sin cloruro y sin nitratos. Ayuda a aumentar la resistencia del cultivo al estrés. Se puede mezclar con la mayoría de los fertilizantes, excepto los que contienen calcio, ayuda a producir cosechas de alta calidad con el máximo valor de exportación, protegiendo al mismo tiempo el medio ambiente.",
    composition: {
      "Potasio (K2O)": "50.0%",
      "Azufre (S)": "18.0%",
    },
    countries: [
      "Bolivia",
      "Colombia",
      "Ecuador",
      "Panamá",
      "Perú",
      "Venezuela",
    ],
    cultivation: ["Hortalizas", "Frutales", "Arroz", "Maíz", "Café"],
    image: "productsImg/solupotasse.png",
    hierarchy: "Fertilizante Edáfico",
  },
  {
    name: "Amisol KP",
    description:
      "Fertilizante de alta solubilidad con nutrientes de alta eficiencia, con Potasio en forma de Nitrato, lo que asegura un mayor aprovechamiento por parte de la planta y una mejor condición nutricional de los cultivos.",
    benefits:
      "Fertilizante ideal para ser utilizado en programas de fertilización vía goteo, microaspersión y fertilización foliar en flores, frutales, hortalizas y cultivos tradicionales. El nitrato de potasio es un fuerte antagonista de los cloruros, evitando que sean absorbidos por las plantas cultivadas en suelos de alta salinidad. En condiciones de suelo ácido, el nitrato de potasio juega un rol importante evitando la acidificación generada por la fuente de nitrógeno amoniacal-ureico. A solo segundos de su aplicación ya se encuentra trabajando para aumentar los rendimientos y la calidad de sus productos. Asegura la calidad y condiciones en las cosechas debido al efecto sobre el tamaño final y acumulación de azúcares en los frutos.",
    composition: {
      "Nitrogeno total (N)": "13.0%",
      "Nitrogeno amoniacal (N-NH4)": "0.8%",
      "Nitrogeno nítrico (N-NO3)": "12.2%",
      "fósforo (P2O5)": "3.0%",
      "Potasio soluble en agua (K2O)": "44.0%",
    },
    countries: [
      "Bolivia",
      "Colombia",
      "Ecuador",
      "Panamá",
      "Perú",
      "Venezuela",
    ],
    cultivation: [
      "Flores",
      "Frutales",
      "Hortalizas",
      "Maíz",
      "Palma de Aceite",
    ],
    image: "productsImg/patentkali.png",
    hierarchy: "Fertilizante soluble",
  },
];

export default products;
