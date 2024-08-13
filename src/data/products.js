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
    countries: [
      "Colombia",
      "Bolivia",
      "Panamá",
      "Ecuador",
      "Perú",
      "Chile",
      "Paraguay",
      "Uruguay",
      "Brasil",
      "Argentina",
    ],
    image: "/data/productsImg/PATENTKALI.jpg",
  },
  {
    name: "MACROMIX 12-12-17",
    description:
      "Fertilizante de mezcla química a base de NPK elementos menores.",
    benefits:
      "Ideal para aplicar en cualquier etapa fenológica de la planta. Se garantiza que cada granulo contiene el aporte nutricional declarado. Alta asimilación y baja higroscopicidad. El contenido de nitrógeno nítrico y amoniacal hace que Macromix 12-12-17 promueva el máximo crecimiento y desarrollo de las plantas. La alta solubilidad del fósforo y potasio convierte esta fórmula en un abono de calidad en los que todas las unidades son disponibles y efectivas.",
    composition: {
      Nitrógeno: "12%",
      Fósforo: "12%",
      Potasio_soluble_en_agua: "17%",
      Azufre: "12%",
      Magnesio: "2%",
      Elementos_varios: "0,22%",
    },
    countries: ["Colombia", "Bolivia", "Panamá"],
    image: "/data/productsImg/MACROMIX_12-12-17.jpg",
  },
  {
    name: "DISAPHOS CA",
    description:
      "Fertilizante aplicación directa al suelo que aporta fósforo, calcio y otros elementos.",
    benefits:
      "Ayuda en la mejora de la fertilidad de los suelos promoviendo el enraizamiento, floración y desarrollo de las plantas para todo tipo de cultivos de corto o largo plazo. Diaphos Ca tiene una función decisiva en la etapa crítica de la floración al promover enlaces de alta energía en los procesos de multiplicación celular, promoviendo un mayor número de flores.",
    composition: {
      Fósforo: "20-22%",
      Potasio: "4-5%",
      Calcio: "32-25%",
      Silicio: "21-23%",
      Magnesio: "3-4%",
      Azufre: "4,5%",
      Hierro: "2%",
      Cobre: "2%",
      Zinc: "1%",
    },
    countries: ["Colombia", "Bolivia", "Panamá"],
    image: "/data/productsImg/DISAPHOS_CA.jpg",
  },
  {
    name: "FERTILEAF 20-20-20",
    description:
      "Fertilizante concentrado soluble que contiene una formula balanceada de Nitrógeno, Fósforo, Potasio, microelementos quelatados y aminoácidos.",
    benefits:
      "Formulado con concentración debidamente balanceada en NPK, micronutrientes y aminoácidos, diseñado para corregir las carencias de los elementos más importantes de la nutrición vegetal, mejorando la producción y calidad de las cosechas. No es compatible con formulaciones que contengan Calcio en su composición. Ayuda en la recuperación de los cultivos estresados por sequías, heladas y plagas. Mejora la asimilación del agua y nutrientes del suelo. Permite aportar importantes cantidades de estos elementos al cultivo que intervienen en los principales procesos metabólicos lo cual favorece el desarrollo de raíces, el aumento de la fructificación, la formación de semillas, y la resistencia a enfermedades y plagas.",
    composition: {
      Nitrogeno_total: "20%",
      Fósforo_asimilable: "20%",
      Potasio_soluble_en_agua: "20%",
      Magnesio: "0.07%",
      Boro: "0.02%",
      Hierro: "0.1%",
      Manganeso: "0.07%",
      Cobre: "0.05%",
      Zinc: "0.06%",
      Aminoacidos_totales: "1.0%",
    },
    countries: ["Colombia", "Bolivia", "Panamá"],
    image: "/data/productsImg/FERTILEAF_20-20-20.jpg",
  },
  {
    name: "FERTILEAF FÓSFORO",
    description:
      "Fertilizante liquido con alto contenido de Fósforo, 100% asimilable por las plantas.",
    benefits:
      "Aporta aminoácidos libres, lo cual facilita la asimilación, permitiendo una rápida y total asimilación de los nutrientes. Contiene elementos mayores y menores de una rápida y total asimilación. Puede ser aplicado foliarmente o vía sistema de riego tecnificado. Dado el porcentaje de magnesio en su fórmula favorece la absorción y utilización del Fósforo. FERTILEAF Fósforo participa en todos los procesos de enraizamiento, crecimiento y fructificación.",
    composition: {
      Nitrogeno_total: "5%",
      Fósforo_asimilable: "40%",
      Potasio_soluble_en_agua: "5%",
      Magnesio: "0.5%",
      Hierro: "0.5%",
      Zinc: "0.05%",
      Cobre: "0.02%",
      Aminoacidos_totales: "1%",
    },
    countries: ["Colombia", "Bolivia", "Panamá"],
    image: "",
  },
  {
    name: "FERTILEAF CALCIO-BORO-ZINC",
    description:
      "Fertilizante foliar líquido en el que la combinación de calcio, boro y zinc induce el crecimiento radicular, la floración y el amarre de flor y fruto de la planta.",
    benefits:
      "Aumenta el peso, calibre y vida post cosecha de los cultivos. Evita la caída prematura de flores y frutas y otorga mayor resistencia a la planta ante condiciones fitopatógenas adversas, logrando producciones de alto valor comercial y mayor vida post cosecha.",
    composition: {
      Nitrogeno_total: "148 g/L",
      Calcio_soluble_en_agua: "210 g/L",
      Boro_soluble_en_agua: "6,75 g/L",
      Zinc_soluble_en_agua: "42,80 g/L",
    },
    countries: ["Colombia", "Bolivia", "Panamá"],
    image: "/data/productsImg/FERTILEAF_CALCIO-BORO-ZINC.jpg",
  },
  {
    name: "FERTILEAF POTASIO",
    description:
      "FERTILEAF POTASIO con alto contenido de potasio en mezcla de aminoácidos libres, lo que permite una rápida absorción de nutrientes.",
    benefits:
      "Debido al contenido de citrato en su formulación, es una fuente de energía para las plantas, permitiendo el ahorro de esta para ser aprovechado en la formación de flores, frutos, vainas, tubérculos, etc., por ende, incrementa el rendimiento. Ayuda a las plantas a compensar condiciones climáticas desfavorables (heladas, sequías). Incrementa la resistencia a plagas y enfermedades. Estimula el desarrollo de frutos, logrando mayor tamaño y peso. Incrementa el contenido de azúcares en frutas y productos cosechados. No causa ni retrasa la maduración de frutos, ya que no contiene nitrógeno, sulfatos, cloruro y/o sodio.",
    composition: {
      Fósforo_asimilable: "0.05%",
      Potasio_soluble_en_agua: "38%",
      Boro: "0.02%",
      Extractos_humicos: "0.05%",
      Aminoacidos_totales: "0.50%",
    },
    countries: ["Colombia", "Bolivia", "Panamá"],
    image: "/data/productsImg/FERTILEAF_POTASIO.jpg",
  },
  {
    name: "MF DISAN INICIO 12-27-13",
    description:
      "Fertilizante NPK mezcla física con alto contenido de fósforo. Ideal para aplicación a la siembra, etapas iniciales del cultivo y/o desarrollo de raíces.",
    benefits:
      "El Fósforo juega un papel fundamental en la transferencia de energía, esencial para la fotosíntesis y la respiración. MF DISAN INICIO 12-27-13 aporta nitrógeno, fósforo y potasio, donde el nitrógeno es un elemento esencial en el crecimiento de la planta ya que es componente de aminoácidos, proteínas, ácidos nucleicos y de la molécula de la clorofila. El potasio es importante para el desarrollo vegetal debido a su papel en la activación enzimática, la síntesis de proteínas y la regulación del estado hídrico de la planta.",
    composition: {
      Nitrogeno_total: "12%",
      Nitrogeno_amoniacal: "5,3%",
      Nitrogeno_ureico: "6,7%",
      Fósforo_asimilable: "27%",
      Potasio_soluble_en_agua: "13%",
    },
    countries: ["Colombia", "Bolivia", "Panamá"],
    image: "/data/productsImg/MF_DISAN_INICIO_12-27-13.jpg",
  },
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
    countries: [
      "Colombia",
      "Bolivia",
      "Panamá",
      "Ecuador",
      "Perú",
      "Chile",
      "Paraguay",
      "Uruguay",
      "Brasil",
      "Argentina",
    ],
    image: "/data/productsImg/PATENTKALI.jpg",
  },
  {
    name: "MACROMIX 12-12-17",
    description:
      "Fertilizante de mezcla química a base de NPK elementos menores.",
    benefits:
      "Ideal para aplicar en cualquier etapa fenológica de la planta. Se garantiza que cada granulo contiene el aporte nutricional declarado. Alta asimilación y baja higroscopicidad. El contenido de nitrógeno nítrico y amoniacal hace que Macromix 12-12-17 promueva el máximo crecimiento y desarrollo de las plantas. La alta solubilidad del fósforo y potasio convierte esta fórmula en un abono de calidad en los que todas las unidades son disponibles y efectivas.",
    composition: {
      Nitrógeno: "12%",
      Fósforo: "12%",
      Potasio_soluble_en_agua: "17%",
      Azufre: "12%",
      Magnesio: "2%",
      Elementos_varios: "0,22%",
    },
    countries: ["Colombia", "Bolivia", "Panamá"],
    image: "/data/productsImg/MACROMIX_12-12-17.jpg",
  },
  {
    name: "DISAPHOS CA",
    description:
      "Fertilizante aplicación directa al suelo que aporta fósforo, calcio y otros elementos.",
    benefits:
      "Ayuda en la mejora de la fertilidad de los suelos promoviendo el enraizamiento, floración y desarrollo de las plantas para todo tipo de cultivos de corto o largo plazo. Diaphos Ca tiene una función decisiva en la etapa crítica de la floración al promover enlaces de alta energía en los procesos de multiplicación celular, promoviendo un mayor número de flores.",
    composition: {
      Fósforo: "20-22%",
      Potasio: "4-5%",
      Calcio: "32-25%",
      Silicio: "21-23%",
      Magnesio: "3-4%",
      Azufre: "4,5%",
      Hierro: "2%",
      Cobre: "2%",
      Zinc: "1%",
    },
    countries: ["Colombia", "Bolivia", "Panamá"],
    image: "/data/productsImg/DISAPHOS_CA.jpg",
  },
  {
    name: "FERTILEAF 20-20-20",
    description:
      "Fertilizante concentrado soluble que contiene una formula balanceada de Nitrógeno, Fósforo, Potasio, microelementos quelatados y aminoácidos.",
    benefits:
      "Formulado con concentración debidamente balanceada en NPK, micronutrientes y aminoácidos, diseñado para corregir las carencias de los elementos más importantes de la nutrición vegetal, mejorando la producción y calidad de las cosechas. No es compatible con formulaciones que contengan Calcio en su composición. Ayuda en la recuperación de los cultivos estresados por sequías, heladas y plagas. Mejora la asimilación del agua y nutrientes del suelo. Permite aportar importantes cantidades de estos elementos al cultivo que intervienen en los principales procesos metabólicos lo cual favorece el desarrollo de raíces, el aumento de la fructificación, la formación de semillas, y la resistencia a enfermedades y plagas.",
    composition: {
      Nitrogeno_total: "20%",
      Fósforo_asimilable: "20%",
      Potasio_soluble_en_agua: "20%",
      Magnesio: "0.07%",
      Boro: "0.02%",
      Hierro: "0.1%",
      Manganeso: "0.07%",
      Cobre: "0.05%",
      Zinc: "0.06%",
      Aminoacidos_totales: "1.0%",
    },
    countries: ["Colombia", "Bolivia", "Panamá"],
    image: "/data/productsImg/FERTILEAF_20-20-20.jpg",
  },
  {
    name: "FERTILEAF FÓSFORO",
    description:
      "Fertilizante liquido con alto contenido de Fósforo, 100% asimilable por las plantas.",
    benefits:
      "Aporta aminoácidos libres, lo cual facilita la asimilación, permitiendo una rápida y total asimilación de los nutrientes. Contiene elementos mayores y menores de una rápida y total asimilación. Puede ser aplicado foliarmente o vía sistema de riego tecnificado. Dado el porcentaje de magnesio en su fórmula favorece la absorción y utilización del Fósforo. FERTILEAF Fósforo participa en todos los procesos de enraizamiento, crecimiento y fructificación.",
    composition: {
      Nitrogeno_total: "5%",
      Fósforo_asimilable: "40%",
      Potasio_soluble_en_agua: "5%",
      Magnesio: "0.5%",
      Hierro: "0.5%",
      Zinc: "0.05%",
      Cobre: "0.02%",
      Aminoacidos_totales: "1%",
    },
    countries: ["Colombia", "Bolivia", "Panamá"],
    image: "",
  },
  {
    name: "FERTILEAF CALCIO-BORO-ZINC",
    description:
      "Fertilizante foliar líquido en el que la combinación de calcio, boro y zinc induce el crecimiento radicular, la floración y el amarre de flor y fruto de la planta.",
    benefits:
      "Aumenta el peso, calibre y vida post cosecha de los cultivos. Evita la caída prematura de flores y frutas y otorga mayor resistencia a la planta ante condiciones fitopatógenas adversas, logrando producciones de alto valor comercial y mayor vida post cosecha.",
    composition: {
      Nitrogeno_total: "148 g/L",
      Calcio_soluble_en_agua: "210 g/L",
      Boro_soluble_en_agua: "6,75 g/L",
      Zinc_soluble_en_agua: "42,80 g/L",
    },
    countries: ["Colombia", "Bolivia", "Panamá"],
    image: "/data/productsImg/FERTILEAF_CALCIO-BORO-ZINC.jpg",
  },
  {
    name: "FERTILEAF POTASIO",
    description:
      "FERTILEAF POTASIO con alto contenido de potasio en mezcla de aminoácidos libres, lo que permite una rápida absorción de nutrientes.",
    benefits:
      "Debido al contenido de citrato en su formulación, es una fuente de energía para las plantas, permitiendo el ahorro de esta para ser aprovechado en la formación de flores, frutos, vainas, tubérculos, etc., por ende, incrementa el rendimiento. Ayuda a las plantas a compensar condiciones climáticas desfavorables (heladas, sequías). Incrementa la resistencia a plagas y enfermedades. Estimula el desarrollo de frutos, logrando mayor tamaño y peso. Incrementa el contenido de azúcares en frutas y productos cosechados. No causa ni retrasa la maduración de frutos, ya que no contiene nitrógeno, sulfatos, cloruro y/o sodio.",
    composition: {
      Fósforo_asimilable: "0.05%",
      Potasio_soluble_en_agua: "38%",
      Boro: "0.02%",
      Extractos_humicos: "0.05%",
      Aminoacidos_totales: "0.50%",
    },
    countries: ["Colombia", "Bolivia", "Panamá"],
    image: "/data/productsImg/FERTILEAF_POTASIO.jpg",
  },
  {
    name: "MF DISAN INICIO 12-27-13",
    description:
      "Fertilizante NPK mezcla física con alto contenido de fósforo. Ideal para aplicación a la siembra, etapas iniciales del cultivo y/o desarrollo de raíces.",
    benefits:
      "El Fósforo juega un papel fundamental en la transferencia de energía, esencial para la fotosíntesis y la respiración. MF DISAN INICIO 12-27-13 aporta nitrógeno, fósforo y potasio, donde el nitrógeno es un elemento esencial en el crecimiento de la planta ya que es componente de aminoácidos, proteínas, ácidos nucleicos y de la molécula de la clorofila. El potasio es importante para el desarrollo vegetal debido a su papel en la activación enzimática, la síntesis de proteínas y la regulación del estado hídrico de la planta.",
    composition: {
      Nitrogeno_total: "12%",
      Nitrogeno_amoniacal: "5,3%",
      Nitrogeno_ureico: "6,7%",
      Fósforo_asimilable: "27%",
      Potasio_soluble_en_agua: "13%",
    },
    countries: ["Colombia", "Bolivia", "Panamá"],
    image: "/data/productsImg/MF_DISAN_INICIO_12-27-13.jpg",
  },
];

export default products;
