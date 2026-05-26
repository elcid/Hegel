// Hegel translation data — EN (Cambridge di Giovanni) / ES
const transData = {

  // UI text
  ui: {
    title: { en: "Hegel · The Science of Logic", es: "Hegel · La Ciencia de la Lógica" },
    subtitle: { en: "Glossary of Concepts — Interactive Spiral Diagram of the Main Concepts", es: "Glosario de Conceptos — Diagrama Espiral Interactivo de los Conceptos Principales" },
    seinslogik: { en: "Doctrine of Being", es: "Doctrina del Ser" },
    wesenslogik: { en: "Doctrine of Essence", es: "Doctrina de la Esencia" },
    begriffslogik: { en: "Doctrine of the Concept", es: "Doctrina del Concepto" },
    legendHelp: { en: "Click: concept definition · Click edge: relation · Esc: close popup", es: "Clic: definición · Clic en línea: relación · Esc: cerrar ventana" },
    graphLinksPng: { en: "PNG Diagram", es: "Diagrama PNG" },
    graphLinksMermaid: { en: "Mermaid", es: "Mermaid" },
    graphLinksPdf: { en: "Diagram PDF", es: "Diagrama PDF" },
    graphLinksLexMd: { en: "Lexicon MD", es: "Léxico MD" },
    graphLinksLexPdf: { en: "Lexicon PDF", es: "Léxico PDF" },
    rpGoto: { en: "→ Go to the definition of the target concept", es: "→ Ir a la definición del concepto destino" },
    footer: { en: "Source: G.W.F. Hegel, The Science of Logic I & II (Cambridge edition, tr. George di Giovanni).<br>Created with DeepSeek · 2026", es: "Fuente: G.W.F. Hegel, Ciencia de la Lógica I & II.<br>Creado con DeepSeek · 2026" },
    // Card labels
    labelPosition: { en: "Position", es: "Posición" },
    labelQuote: { en: "Original Quotation", es: "Cita Original" },
    labelDefinition: { en: "Definition", es: "Definición" },
    labelCrossRefs: { en: "Cross References", es: "Referencias Cruzadas" },
    // Edge labels
    edgeDialectic: { de: "Dialektischer Übergang", en: "Dialectical Transition", es: "Transición Dialéctica" },
    edgeIndifference: { de: "Übergang der Indifferenz ins Wesen", en: "Transition of Indifference into Essence", es: "Transición de la Indiferencia a la Esencia" },
    edgeGenesis: { de: "Genesis des Begriffs aus der Wechselwirkung", en: "Genesis of the Concept from Interaction", es: "Génesis del Concepto desde la Acción Recíproca" },
    // Book titles for card grid
    bookSein: { en: "Book One: The Doctrine of Being", es: "Libro Primero: La Doctrina del Ser" },
    bookWesen: { en: "Book Two: The Doctrine of Essence", es: "Libro Segundo: La Doctrina de la Esencia" },
    bookBegriff: { en: "Book Three: The Doctrine of the Concept", es: "Libro Tercero: La Doctrina del Concepto" }
  },

  // Concept names (EN / ES) for ALL concepts
  names: {
    s01: { en: "BEING", es: "SER" },
    s02: { en: "NOTHING", es: "NADA" },
    s03: { en: "BECOMING", es: "DEVENIR" },
    s04: { en: "DETERMINATE BEING", es: "SER DETERMINADO" },
    s05: { en: "QUALITY", es: "CALIDAD" },
    s06: { en: "SOMETHING AND OTHER · FINITUDE", es: "ALGO Y OTRO · FINITUD" },
    s07: { en: "INFINITY", es: "INFINITUD" },
    s08: { en: "BEING-FOR-SELF", es: "SER-PARA-SÍ" },
    s09: { en: "ONE / MANY · REPULSION / ATTRACTION", es: "UNO / MUCHOS · REPULSIÓN / ATRACCIÓN" },
    s10: { en: "QUANTITY", es: "CANTIDAD" },
    s11: { en: "QUANTUM · NUMBER · DEGREE", es: "QUANTUM · NÚMERO · GRADO" },
    s12: { en: "MEASURE", es: "MEDIDA" },
    s13: { en: "ABSOLUTE INDIFFERENCE", es: "INDIFERENCIA ABSOLUTA" },
    w01: { en: "ESSENCE", es: "ESENCIA" },
    w02: { en: "SHOW", es: "APARIENCIA" },
    w03: { en: "REFLECTION", es: "REFLEXIÓN" },
    w04: { en: "DETERMINATIONS OF REFLECTION", es: "DETERMINACIONES DE LA REFLEXIÓN" },
    w05: { en: "GROUND", es: "FUNDAMENTO" },
    w06: { en: "EXISTENCE", es: "EXISTENCIA" },
    w07: { en: "APPEARANCE", es: "FENÓMENO" },
    w08: { en: "THE ESSENTIAL RELATION", es: "LA RELACIÓN ESENCIAL" },
    w09: { en: "ACTUALITY", es: "REALIDAD EFECTIVA" },
    w10: { en: "THE ABSOLUTE", es: "LO ABSOLUTO" },
    w11: { en: "SUBSTANTIALITY", es: "SUSTANCIALIDAD" },
    w12: { en: "CAUSALITY", es: "CAUSALIDAD" },
    w13: { en: "INTERACTION", es: "ACCIÓN RECÍPROCA" },
    b01: { en: "THE CONCEPT", es: "EL CONCEPTO" },
    b02: { en: "UNIVERSAL · PARTICULAR · INDIVIDUAL", es: "UNIVERSAL · PARTICULAR · INDIVIDUO" },
    b03: { en: "THE JUDGMENT", es: "EL JUICIO" },
    b04: { en: "THE SYLLOGISM", es: "EL SILOGISMO" },
    b05: { en: "OBJECTIVITY", es: "LA OBJETIVIDAD" },
    b06: { en: "TELEOLOGY", es: "TELEOLOGÍA" },
    b07: { en: "THE IDEA", es: "LA IDEA" },
    b08: { en: "LIFE", es: "LA VIDA" },
    b09: { en: "COGNITION", es: "EL CONOCER" },
    b10: { en: "THE ABSOLUTE IDEA", es: "LA IDEA ABSOLUTA" }
  },

  // Definitions (EN / ES) — principal concepts only
  definitions: {
    s01: {
      en: "Being is pure, indeterminate immediacy. It is the absolute beginning of Logic — that with which the science must begin. As the completely determinationless, it is in fact the same as Nothing.",
      es: "El Ser es la inmediatez pura e indeterminada. Es el comienzo absoluto de la Lógica — aquello con lo que la ciencia debe comenzar. Como lo completamente indeterminado, es de hecho lo mismo que la Nada."
    },
    s02: {
      en: "Nothing, pure nothing; it is simple equality with itself, complete emptiness, absence of determination and content; undifferentiated within itself.",
      es: "La Nada, la nada pura; es la igualdad simple consigo misma, vacuidad completa, carencia de determinación y contenido; indistinción en sí misma."
    },
    s03: {
      en: "Becoming is the unity of Being and Nothing — the movement in which both immediately vanish into each other. It has two moments: coming-to-be (transition of Nothing into Being) and ceasing-to-be (transition of Being into Nothing). Becoming sublates itself and results in Determinate Being.",
      es: "El Devenir es la unidad del Ser y la Nada — el movimiento en que ambos desaparecen inmediatamente el uno en el otro. Tiene dos momentos: el surgir (transición de la Nada al Ser) y el perecer (transición del Ser a la Nada). El Devenir se supera a sí mismo y resulta en el Ser Determinado."
    },
    s04: {
      en: "Determinate Being is determinate being — being with a quality. Non-being is taken up into being so that the whole appears in the form of immediacy. Etymologically: 'being at a certain place' (da).",
      es: "El Ser Determinado es el ser con una cualidad. El no-ser es acogido en el ser, de modo que el todo aparece en la forma de la inmediatez. Etimológicamente: 'ser en un lugar determinado'."
    },
    s05: {
      en: "Quality is the immediate determinateness of Determinate Being — that through which something is *what* it is. It is identical with the being of something: something perishes when it loses its quality. As *Reality* it is affirmative determinateness; as *Negation* it is limit and barrier.",
      es: "La Cualidad es la determinación inmediata del Ser Determinado — aquello por lo cual algo es *lo que* es. Es idéntica al ser del algo: algo perece cuando pierde su cualidad. Como *Realidad* es determinación afirmativa; como *Negación* es límite y barrera."
    },
    s07: {
      en: "Hegel distinguishes the *spurious* (negative) infinity — the mere 'ever onward' of the infinite progression — from the *genuine* (affirmative) infinity. The genuine infinity is the sublation of the finite, where the other is not outside but rather as sublated *moment* within the one: 'Being-with-itself in the other'.",
      es: "Hegel distingue la infinitud *espuria* (negativa) — el mero 'siempre más allá' del progreso infinito — de la infinitud *verdadera* (afirmativa). La infinitud verdadera es la superación de lo finito, donde lo otro no está fuera sino como *momento* superado en el uno: 'Ser-sí-mismo en el otro'."
    },
    s08: {
      en: "Being-for-self is the consummated quality — being that has taken back all otherness into itself. It is *One*: the unity that relates to itself and excludes everything other from itself (repulsion), but in this exclusion posits the other as its own moment.",
      es: "El Ser-para-sí es la cualidad consumada — el ser que ha retomado toda alteridad en sí mismo. Es *Uno*: la unidad que se relaciona consigo misma y excluye de sí todo lo otro (repulsión), pero en esta exclusión pone lo otro como su propio momento."
    },
    s10: {
      en: "Quantity is the *sublated* quality — the determinateness that is indifferent to the being of something. Whereas quality is what makes something what it is, in quantity the thing remains what it is regardless of its being larger or smaller.",
      es: "La Cantidad es la cualidad *superada* — la determinación que es indiferente al ser de algo. Mientras que la cualidad es lo que hace que algo sea lo que es, en la cantidad la cosa permanece siendo lo que es independientemente de ser mayor o menor."
    },
    s12: {
      en: "Measure is the unity of Quality and Quantity — a *qualitative quantity*. It is the sphere where quantitative changes suddenly become qualitative. The measureless (the destruction of a measure through excess) is the transition into the Essence.",
      es: "La Medida es la unidad de la Cualidad y la Cantidad — una *cantidad cualitativa*. Es la esfera donde los cambios cuantitativos se vuelven repentinamente cualitativos. Lo desmedido (la destrucción de una medida por exceso) es la transición a la Esencia."
    },
    s13: {
      en: "Absolute Indifference is the point where Being has determined itself completely, yet all determinateness is cancelled and preserved — the indifference that precedes the emergence of Essence as the truth of Being.",
      es: "La Indiferencia Absoluta es el punto donde el Ser se ha determinado completamente, pero toda determinación está cancelada y preservada — la indiferencia que precede al surgimiento de la Esencia como verdad del Ser."
    },
    w01: {
      en: "Essence is Being's *past* — not in a temporal sense, but as the truth of Being. Being has sublated itself into Essence. Essence is Being that has returned into itself: it is *reflected* Being, the movement of showing (Schein) within itself.",
      es: "La Esencia es el *pasado* del Ser — no en sentido temporal, sino como la verdad del Ser. El Ser se ha superado a sí mismo en la Esencia. La Esencia es el Ser que ha retornado a sí mismo: es el Ser *reflejado*, el movimiento del aparecer (Schein) dentro de sí."
    },
    w03: {
      en: "Reflection is the movement of Essence through which it determines itself within itself. It passes through three forms: (1) Positing Reflection: Essence posits itself as negation of itself; (2) External Reflection: Essence relates to what is posited as something found; (3) Determining Reflection: unity of both — from which arise the *determinations of reflection* (Identity, Difference, Contradiction).",
      es: "La Reflexión es el movimiento de la Esencia mediante el cual se determina a sí misma en sí misma. Atraviesa tres formas: (1) Reflexión Positente: la Esencia se pone como negación de sí misma; (2) Reflexión Externa: la Esencia se relaciona con lo puesto como algo encontrado; (3) Reflexión Determinante: unidad de ambas — de la cual surgen las *determinaciones de la reflexión* (Identidad, Diferencia, Contradicción)."
    },
    w04: {
      en: "Identity is the first determination of reflection — the essence relating to itself. But abstract identity (A = A) is empty; concrete identity contains *difference* within itself. Difference appears as diversity (indifferent difference) and as opposition (positive-negative). Their truth is Contradiction, which is the root of all movement and life.",
      es: "La Identidad es la primera determinación de la reflexión — la esencia que se relaciona consigo misma. Pero la identidad abstracta (A = A) es vacía; la identidad concreta contiene la *diferencia* en sí misma. La diferencia aparece como diversidad (diferencia indiferente) y como oposición (positivo-negativo). Su verdad es la Contradicción, que es la raíz de todo movimiento y vida."
    },
    w05: {
      en: "Ground is the unity of Identity and Difference — the essence that has determined itself as the ground of existence. Every existence has a ground: it is not groundless but posited. The ground relates to the conditioned; the ground's own condition leads to the unconditional — the emergence of Existence.",
      es: "El Fundamento es la unidad de la Identidad y la Diferencia — la esencia que se ha determinado como fundamento de la existencia. Toda existencia tiene un fundamento: no es sin fundamento sino puesta. El fundamento se relaciona con lo condicionado; la propia condición del fundamento conduce a lo incondicionado — el surgimiento de la Existencia."
    },
    w07: {
      en: "Appearance is the essence that has entered into existence — the way the inner shows itself in the outer. The appearing world is the counterpart of the world in itself (the essential world). Appearance is not mere illusion; it is the manifestation of the essence. The truth of appearance is the essential relation.",
      es: "El Fenómeno es la esencia que ha entrado en la existencia — el modo en que lo interior se muestra en lo exterior. El mundo fenoménico es la contrapartida del mundo en sí (el mundo esencial). El fenómeno no es mera ilusión; es la manifestación de la esencia. La verdad del fenómeno es la relación esencial."
    },
    w09: {
      en: "Actuality is the unity of Essence and Appearance — the immediate unity of the inner and the outer. What is actual can be effective; actuality is the realm of necessity. Its moments are: Contingency (the merely possible), Formal Necessity, Real Necessity, and finally the emergence of Freedom as the truth of Necessity.",
      es: "La Realidad Efectiva es la unidad de la Esencia y el Fenómeno — la unidad inmediata de lo interior y lo exterior. Lo real efectivo puede ser eficaz; la realidad efectiva es el reino de la necesidad. Sus momentos son: Contingencia (lo meramente posible), Necesidad Formal, Necesidad Real, y finalmente el surgimiento de la Libertad como verdad de la Necesidad."
    },
    w10: {
      en: "The Absolute is the highest, all-encompassing sphere of Actuality — the in-itself of all being. It cannot be grasped through external reflection but only through its own self-manifestation. The Absolute is not abstract but the most concrete: it unfolds its content through the modalities of the absolute relation.",
      es: "Lo Absoluto es la esfera suprema y omniabarcante de la Realidad Efectiva — el en-sí de todo ser. No puede ser captado mediante reflexión externa sino solo mediante su propia automanifestación. Lo Absoluto no es abstracto sino lo más concreto: despliega su contenido a través de las modalidades de la relación absoluta."
    },
    w11: {
      en: "Substantiality is the first form of the absolute relation — the relation between Substance and Accidents. Substance is the self-subsistent, the power that sustains its accidents. But substance must externalize itself: its truth is to pass over into Causality.",
      es: "La Sustancialidad es la primera forma de la relación absoluta — la relación entre Sustancia y Accidentes. La Sustancia es lo subsistente por sí mismo, el poder que sostiene sus accidentes. Pero la sustancia debe exteriorizarse: su verdad es pasar a la Causalidad."
    },
    w12: {
      en: "Causality is the relation of Cause and Effect — the second form of the absolute relation. Cause is the active, productive substance; Effect is what is posited by the cause. But this relation is one-sided: the cause is itself the effect of its own positing. The truth of causality is Interaction.",
      es: "La Causalidad es la relación de Causa y Efecto — la segunda forma de la relación absoluta. La Causa es la sustancia activa y productiva; el Efecto es lo puesto por la causa. Pero esta relación es unilateral: la causa es ella misma el efecto de su propio poner. La verdad de la causalidad es la Acción Recíproca."
    },
    w13: {
      en: "In Interaction, the one-sidedness of Causality is sublated: every Cause is also Effect, every Effect also Cause. Interaction is the highest form of Essence and at the same time the *transition into the Concept*. In it, *Freedom* appears as the truth of Necessity.",
      es: "En la Acción Recíproca, la unilateralidad de la Causalidad es superada: toda Causa es también Efecto, todo Efecto también Causa. La Acción Recíproca es la forma más alta de la Esencia y al mismo tiempo la *transición al Concepto*. En ella, la *Libertad* aparece como la verdad de la Necesidad."
    },
    b01: {
      en: "The Concept is the truth of Being and Essence — the principle of all life and spirit. While Being is immediate and Essence reflective, the Concept is self-referential and free. It is not a mere subjective representation but the objective concept that constitutes the inner nature of things.",
      es: "El Concepto es la verdad del Ser y la Esencia — el principio de toda vida y espíritu. Mientras que el Ser es inmediato y la Esencia reflexiva, el Concepto es autorreferencial y libre. No es una mera representación subjetiva sino el concepto objetivo que constituye la naturaleza interna de las cosas."
    },
    b03: {
      en: "The Judgment is the *particularization* of the Concept — the positing of the concept's moments in their difference. 'All things are a judgment' means: every being is a singular that has a universal nature. The forms of judgment (qualitative, reflective, necessitarian, conceptual) correspond to the development of the logical idea.",
      es: "El Juicio es la *particularización* del Concepto — la puesta de los momentos del concepto en su diferencia. 'Todas las cosas son un juicio' significa: todo ser es un singular que tiene una naturaleza universal. Las formas del juicio (cualitativo, reflexivo, necesitante, conceptual) corresponden al desarrollo de la idea lógica."
    },
    b04: {
      en: "The Syllogism is the restoration of the Concept in the Judgment — the rational form in which the particular mediates the universal and the singular. The syllogism is the *truth* of the judgment. Its forms (qualitative, reflective, disjunctive) show the progression from external to internal necessity.",
      es: "El Silogismo es la restauración del Concepto en el Juicio — la forma racional en que lo particular media lo universal y lo singular. El silogismo es la *verdad* del juicio. Sus formas (cualitativo, reflexivo, disyuntivo) muestran el progreso de la necesidad externa a la interna."
    },
    b05: {
      en: "Objectivity is the Concept that has sublated its subjective form and gone forth into immediacy. It is the Concept as it exists in itself, free and independent. Objectivity has three forms: Mechanism, Chemism, and Teleology — each higher than the previous, culminating in the Idea.",
      es: "La Objetividad es el Concepto que ha superado su forma subjetiva y ha salido a la inmediatez. Es el Concepto tal como existe en sí, libre e independiente. La Objetividad tiene tres formas: Mecanismo, Quimismo y Teleología — cada una más alta que la anterior, culminando en la Idea."
    },
    b06: {
      en: "Teleology is the third form of Objectivity — the relation of End, Means, and Realized End. The teleological process is the sublation of the externality of mechanism: the End posits itself through the Means into the Object, realizing itself. The truth of Teleology is the Idea.",
      es: "La Teleología es la tercera forma de la Objetividad — la relación de Fin, Medio y Fin Realizado. El proceso teleológico es la superación de la externalidad del mecanismo: el Fin se pone a través del Medio en el Objeto, realizándose a sí mismo. La verdad de la Teleología es la Idea."
    },
    b07: {
      en: "The Idea is the consummated truth — the unity of Concept and Reality, Subjectivity and Objectivity. It is not a mere ideal but the alone genuinely actual. The Idea passes through three shapes: Life, Cognition, and the Absolute Idea.",
      es: "La Idea es la verdad consumada — la unidad del Concepto y la Realidad, la Subjetividad y la Objetividad. No es un mero ideal sino lo verdaderamente real. La Idea atraviesa tres figuras: la Vida, el Conocer y la Idea Absoluta."
    },
    b08: {
      en: "Life is the Idea in its immediacy — the Concept that has realized itself in a living individual. Life is not a blind process but the self-preserving, self-reproducing unity of soul and body. Its truth is to go beyond itself into Cognition.",
      es: "La Vida es la Idea en su inmediatez — el Concepto que se ha realizado en un individuo viviente. La Vida no es un proceso ciego sino la unidad autopreservante y autorreproductiva de alma y cuerpo. Su verdad es ir más allá de sí hacia el Conocer."
    },
    b09: {
      en: "Cognition is the second shape of the Idea — the Idea that has returned into itself, positing the object over against itself. It has two forms: Theoretical Cognition (knowledge of the given world) and Practical Cognition (the Good, which ought to be realized). Their unity is the Absolute Idea.",
      es: "El Conocer es la segunda figura de la Idea — la Idea que ha retornado a sí misma, poniendo el objeto frente a sí. Tiene dos formas: el Conocer Teórico (conocimiento del mundo dado) y el Conocer Práctico (el Bien, que debe realizarse). Su unidad es la Idea Absoluta."
    },
    b10: {
      en: "The Absolute Idea is the highest point of the Logic — the consummated unity of Theory and Practice, Being and Thinking. Its content is the *Method*: the dialectical movement that contains all preceding determinations as its moments. It is the self-comprehending Absolute, *pure personality*. With it Logic closes and releases itself into Nature.",
      es: "La Idea Absoluta es el punto más alto de la Lógica — la unidad consumada de Teoría y Práctica, Ser y Pensar. Su contenido es el *Método*: el movimiento dialéctico que contiene todas las determinaciones precedentes como sus momentos. Es el Absoluto que se comprende a sí mismo, la *personalidad pura*. Con ella la Lógica se cierra y se libera en la Naturaleza."
    },
    // Additional definitions for remaining concepts
    s06: {
      en: "Determinate Being reflected into itself becomes *Something*. Something stands in relation to an *Other*. The *limit* is the shared determinateness of both. The Finite is what is limited by its boundary — it *ought* to go beyond the barrier, but perishes in doing so. The truth of the finite is its *ideality*.",
      es: "El Ser Determinado reflejado en sí mismo se convierte en *Algo*. Algo está en relación con un *Otro*. El *límite* es la determinación compartida de ambos. Lo Finito es lo que está limitado por su frontera — *debe* ir más allá de la barrera, pero perece al hacerlo. La verdad de lo finito es su *idealidad*."
    },
    s09: {
      en: "Being-for-self as One posits the Many, and in Attraction returns to itself. The One is the simple self-relation of the Many as sublated. The dialectic of Repulsion and Attraction is the process through which quantity arises.",
      es: "El Ser-para-sí como Uno pone los Muchos, y en la Atracción retorna a sí mismo. El Uno es la simple autorrelación de los Muchos como superados. La dialéctica de la Repulsión y la Atracción es el proceso mediante el cual surge la cantidad."
    },
    s11: {
      en: "Quantum is determinate quantity — a quantity with a limit or boundary. Number is the perfected form of Quantum: the unity of discrete and continuous magnitude. Degree is intensive magnitude — the qualitative aspect within quantity.",
      es: "El Quantum es la cantidad determinada — una cantidad con un límite o frontera. El Número es la forma perfeccionada del Quantum: la unidad de la magnitud discreta y continua. El Grado es la magnitud intensiva — el aspecto cualitativo dentro de la cantidad."
    },
    w02: {
      en: "Show (Schein) is the immediate moment of Essence — the shining of essence within itself. It is the immediacy that is *mediated* through its negation: what shows itself is not nothing but a positedness that is not self-standing. Show is the 'residue' of Being — but without independent subsistence.",
      es: "La Apariencia (Schein) es el momento inmediato de la Esencia — el aparecer de la esencia en sí misma. Es la inmediatez que está *mediada* por su negación: lo que aparece no es nada sino un ser-puesto que no es autosuficiente. La Apariencia es el 'residuo' del Ser — pero sin subsistencia independiente."
    },
    w06: {
      en: "Existence is the immediate emergence of the thing from its ground. The thing exists as the unity of ground and what is grounded. Existence is not mere abstract being but determinate, concrete presence: the thing with its properties, standing in relation to other things.",
      es: "La Existencia es el surgimiento inmediato de la cosa desde su fundamento. La cosa existe como la unidad del fundamento y lo fundado. La Existencia no es mero ser abstracto sino presencia determinada y concreta."
    },
    w08: {
      en: "The Essential Relation is the exhibited truth of Appearance — the explicit unity of the inner and the outer. It has three forms: (1) Whole and Parts; (2) Force and its Expression; (3) Inner and Outer.",
      es: "La Relación Esencial es la verdad expuesta del Fenómeno — la unidad explícita de lo interior y lo exterior. Tiene tres formas: (1) Todo y Partes; (2) Fuerza y su Manifestación; (3) Interior y Exterior."
    },
    b02: {
      en: "The Concept as such has three moments: Universality (the free self-identity of the concept), Particularity (the determinateness of the universal), and Individuality (the return of the particular into the universal — the concrete self).",
      es: "El Concepto como tal tiene tres momentos: Universalidad (la libre autoidentidad del concepto), Particularidad (la determinación de lo universal) e Individualidad (el retorno de lo particular a lo universal — el yo concreto)."
    }
  },

  // Quotes (EN / ES) — now complete for all concepts that have quotes in data.js
  quotes: {
    s01: {
      en: '"Being, pure being, — without any further determination. In its indeterminate immediacy it is equal only to itself, and also not unequal over against an other; it has no difference within it, nor any outwardly."',
      es: '"El Ser, el ser puro — sin ninguna determinación ulterior. En su inmediatez indeterminada es igual solo a sí mismo, y tampoco desigual frente a otro; no tiene diferencia alguna dentro de sí, ni hacia afuera."'
    },
    s02: {
      en: '"Nothing, pure nothing; it is simple equality with itself, complete emptiness, absence of determination and content; undifferentiated within itself."',
      es: '"La Nada, la nada pura; es la igualdad simple consigo misma, vacuidad completa, carencia de determinación y contenido; indistinción en sí misma."'
    },
    s03: {
      en: '"Pure Being and pure Nothing are therefore the same. What is the truth is neither Being nor Nothing, but that Being does not pass over into Nothing — has passed over. [...] Their truth is therefore this movement of the immediate vanishing of the one in the other: Becoming."',
      es: '"El Ser puro y la Nada pura son, pues, lo mismo. La verdad no es ni el Ser ni la Nada, sino que el Ser no pasa a la Nada — ha pasado. [...] Su verdad es, por tanto, este movimiento del desaparecer inmediato del uno en el otro: el Devenir."'
    },
    s04: {
      en: '"Out of Becoming comes Determinate Being. Determinate Being is the simple oneness of Being and Nothing. [...] Determinate Being is, according to its Becoming, in general being with a non-being, so that this non-being is taken up into simple unity with being."',
      es: '"Del Devenir surge el Ser Determinado. El Ser Determinado es la unidad simple del Ser y la Nada. [...] El Ser Determinado es, según su Devenir, en general ser con un no-ser, de modo que este no-ser es acogido en unidad simple con el ser."'
    },
    s08: {
      en: '"Being-for-self consists in having so gone beyond the barrier, beyond its otherness, that as this negation it is the infinite return into itself."',
      es: '"El Ser-para-sí consiste en haber ido más allá de la barrera, más allá de su alteridad, de modo que como esta negación es el retorno infinito a sí mismo."'
    },
    s10: {
      en: '"Quantity is the sublated determinateness of quality. The quantum is the indifferent limit; it is the determinateness that is equally an unrest and a going-outside-itself."',
      es: '"La Cantidad es la determinación superada de la cualidad. El quantum es el límite indiferente; es la determinación que es igualmente un inquietud y un salir-fuera-de-sí."'
    },
    s12: {
      en: '"Measure is the qualitative quantum, the specific quantum — a limit that is itself the determinateness of the something. The measureless is the destruction of a measure through its quantitative excess."',
      es: '"La Medida es el quantum cualitativo, el quantum específico — un límite que es él mismo la determinación del algo. Lo desmedido es la destrucción de una medida por su exceso cuantitativo."'
    },
    s13: {
      en: '"Absolute Indifference is the culmination of Being, where all determinateness is cancelled and preserved. The transition from Being to Essence occurs in the indifference that is both being and the negation of being."',
      es: '"La Indiferencia Absoluta es la culminación del Ser, donde toda determinación está cancelada y preservada. La transición del Ser a la Esencia ocurre en la indiferencia que es tanto ser como negación del ser."'
    },
    w01: {
      en: '"The Essence is Being\'s *past* — but past in a non-temporal sense. The truth of Being is Essence. Being has not ceased to be; rather, the Essence is Being that has sublated itself and entered into itself."',
      es: '"La Esencia es el *pasado* del Ser — pero pasado en un sentido no temporal. La verdad del Ser es la Esencia. El Ser no ha cesado de ser; más bien, la Esencia es el Ser que se ha superado a sí mismo y ha entrado en sí."'
    },
    w02: {
      en: '"Show is the determinateness of essence that is immediate in the sense of a sublated immediacy; it is the reflection of essence into itself, the self-related negativity."',
      es: '"La Apariencia es la determinación de la esencia que es inmediata en el sentido de una inmediatez superada; es la reflexión de la esencia en sí misma, la negatividad autorreferente."'
    },
    w03: {
      en: '"Reflection is the movement of essence through which it shows itself within itself; it is the shining of essence into itself, the return from otherness into itself."',
      es: '"La Reflexión es el movimiento de la esencia mediante el cual se muestra a sí misma dentro de sí; es el aparecer de la esencia en sí misma, el retorno desde la alteridad a sí misma."'
    },
    w04: {
      en: '"The determinations of reflection — Identity, Difference, and Ground — are not external forms applied to essence but the immanent self-determinations of essence itself."',
      es: '"Las determinaciones de la reflexión — Identidad, Diferencia y Fundamento — no son formas externas aplicadas a la esencia sino las autodeterminaciones inmanentes de la esencia misma."'
    },
    w05: {
      en: '"Ground is the unity of identity and difference, the truth of what has been determined in reflection. The thing issues from its ground, and the ground is its presupposition."',
      es: '"El Fundamento es la unidad de identidad y diferencia, la verdad de lo que ha sido determinado en la reflexión. La cosa procede de su fundamento, y el fundamento es su presuposición."'
    },
    w07: {
      en: '"Appearance is the essence that has gone forth into existence, the sphere of the phenomenon. The world of appearance is the counterpart of the essential world."',
      es: '"El Fenómeno es la esencia que ha salido a la existencia, la esfera del fenómeno. El mundo de la apariencia es la contrapartida del mundo esencial."'
    },
    w09: {
      en: '"Actuality is the unity of Essence and Appearance, of the inner and the outer. The sphere of Actuality is the exhibited unity of the inner and the outer, the Necessity that has become immediate."',
      es: '"La Realidad Efectiva es la unidad de la Esencia y el Fenómeno, de lo interior y lo exterior. La esfera de la Realidad Efectiva es la unidad expuesta de lo interior y lo exterior, la Necesidad que se ha vuelto inmediata."'
    },
    w11: {
      en: '"Substantiality is the first modality of the absolute relation: the relation of substance and accidents. Substance is the subsisting power that differentiates itself into its accidents."',
      es: '"La Sustancialidad es la primera modalidad de la relación absoluta: la relación de sustancia y accidentes. La Sustancia es el poder subsistente que se diferencia en sus accidentes."'
    },
    w12: {
      en: '"Causality is the relation of cause and effect, the second modality of the absolute relation. The cause is the active substance that produces its effect, and in the effect the cause becomes itself."',
      es: '"La Causalidad es la relación de causa y efecto, la segunda modalidad de la relación absoluta. La causa es la sustancia activa que produce su efecto, y en el efecto la causa deviene ella misma."'
    },
    w13: {
      en: '"Interaction is the positedness of Causality — that is, the necessity which in Cause and Effect falls apart into external determinations is in it posited as identity of both."',
      es: '"La Acción Recíproca es el ser-puesto de la Causalidad — esto es, la necesidad que en Causa y Efecto se descompone en determinaciones externas está en ella puesta como identidad de ambas."'
    },
    b01: {
      en: '"The Concept is the truth of Being and Essence, inasmuch as the showing (Schein) of reflection is itself independent and the positedness is reflected into itself."',
      es: '"El Concepto es la verdad del Ser y la Esencia, en cuanto el aparecer (Schein) de la reflexión es él mismo independiente y el ser-puesto está reflejado en sí mismo."'
    },
    b03: {
      en: '"All things are a judgment — that is, they are singulars that have a universal nature as their inherent ground; or they are a universal that is self-particularizing."',
      es: '"Todas las cosas son un juicio — esto es, son singulares que tienen una naturaleza universal como su fundamento inherente; o son un universal que se autoparticulariza."'
    },
    b07: {
      en: '"The Idea is the True in and for itself, the absolute unity of the Concept and Objectivity."',
      es: '"La Idea es lo Verdadero en y para sí, la unidad absoluta del Concepto y la Objetividad."'
    },
    b10: {
      en: '"The Absolute Idea is the unity of the theoretical and the practical Idea and hence the unity of the Idea of Life and the Idea of Cognition."',
      es: '"La Idea Absoluta es la unidad de la Idea teórica y la Idea práctica y, por tanto, la unidad de la Idea de la Vida y la Idea del Conocer."'
    }
  },

  // Cross-reference texts (sourceId_targetId → EN/ES)
  crossRefTexts: {
    "s01_s02": { en: "Pure Being and pure Nothing are *the same*.", es: "El Ser puro y la Nada pura son *lo mismo*." },
    "s01_s03": { en: "The truth of Being (and Nothing) is Becoming.", es: "La verdad del Ser (y la Nada) es el Devenir." },
    "s01_w01": { en: "Essence is Being's *past*, timelessly past Being.", es: "La Esencia es el *pasado* del Ser, el Ser atemporalmente pasado." },
    "s01_b01": { en: "The Concept is the *truth* of Being and Essence.", es: "El Concepto es la *verdad* del Ser y la Esencia." },
    "s02_s01": { en: "Being and Nothing are *the same* and yet *absolutely different*.", es: "Ser y Nada son *lo mismo* y a la vez *absolutamente distintos*." },
    "s02_s03": { en: "Nothing passes immediately into Being, and vice versa.", es: "La Nada pasa inmediatamente a Ser, y viceversa." },
    "s02_s04": { en: "Determinate Being is the unity of Being and Nothing — Being with a non-being.", es: "El Ser Determinado es la unidad del Ser y la Nada — Ser con un no-ser." },
    "s03_s03": { en: "Becoming is their truth.", es: "El Devenir es su verdad." },
    "s03_s04": { en: "Out of Becoming, Determinate Being *emerges*. Mediation lies behind it.", es: "Del Devenir *surge* el Ser Determinado. La mediación yace detrás de él." },
    "s03_b01": { en: "As Becoming is the genesis of Determinate Being, so is Interaction", es: "Como el Devenir es la génesis del Ser Determinado, así la Acción Recíproca" },
    "s04_s03": { en: "Determinate Being is the result of Becoming; Becoming lies *behind* it.", es: "El Ser Determinado es el resultado del Devenir; el Devenir yace *detrás* de él." },
    "s04_s05": { en: "The determinateness of Determinate Being is Quality (Reality and Negation).", es: "La determinación del Ser Determinado es la Cualidad (Realidad y Negación)." },
    "s04_w01": { en: "Determinate Being falls back into the sphere of Essence when essential and", es: "El Ser Determinado cae de nuevo en la esfera de la Esencia cuando esencial y" },
    "s05_s10": { en: "Quantity is the *sublated* Quality — which against Being", es: "La Cantidad es la Cualidad *superada* — que frente al Ser" },
    "s05_s12": { en: "In Measure, Quality returns to Quantity: Measure is *qualitative Quantity*.", es: "En la Medida, la Cualidad retorna a la Cantidad: la Medida es la *Cantidad cualitativa*." },
    "s07_s08": { en: "Being-for-self *is* the genuine infinity — the return into itself.", es: "El Ser-para-sí *es* la infinitud verdadera — el retorno a sí mismo." },
    "s07_b01": { en: "The Concept as the free is actualized infinity.", es: "El Concepto como lo libre es la infinitud realizada." },
    "s08_s05": { en: "Being-for-self is the result of the dialectic of Something and", es: "El Ser-para-sí es el resultado de la dialéctica de Algo y" },
    "s08_s10": { en: "The One is the principle of Quantity.", es: "El Uno es el principio de la Cantidad." },
    "s10_s05": { en: "Sublated Quality.", es: "Cualidad superada." },
    "s10_s12": { en: "Returns to Quality; Measure is the unity of both.", es: "Retorna a la Cualidad; la Medida es la unidad de ambas." },
    "s10_w01": { en: "Quantity in the sphere of Being corresponds to what Essence as a whole", es: "La Cantidad en la esfera del Ser corresponde a lo que la Esencia en su conjunto" },
    "s12_s10": { en: "Measure is their synthetic unity.", es: "La Medida es su unidad sintética." },
    "s12_s13": { en: "The final point of reversal before the transition into Essence.", es: "El punto final de inversión antes de la transición a la Esencia." },
    "s12_w01": { en: "The measureless and the reversal of measures lead to the *Becoming of Essence* — over", es: "Lo desmedido y la inversión de las medidas conducen al *Devenir de la Esencia* — sobre" },
    "s13_w01": { en: "Absolute Indifference is the immediate *transition into Essence*.", es: "La Indiferencia Absoluta es la *transición inmediata a la Esencia*." },
    "s13_s12": { en: "The sublation of Measure leads to Absolute Indifference.", es: "La superación de la Medida conduce a la Indiferencia Absoluta." },
    "s13_s03": { en: "As Becoming from the contradiction of Being and Nothing, so Essence emerges", es: "Como el Devenir de la contradicción del Ser y la Nada, así la Esencia surge" },
    "w01_s01": { en: "Truth of Being; Being is the immediate presupposition of Essence.", es: "Verdad del Ser; el Ser es la presuposición inmediata de la Esencia." },
    "w01_b01": { en: "Essence passes through reflection into the Concept. The Concept is the", es: "La Esencia pasa a través de la reflexión al Concepto. El Concepto es la" },
    "w01_w03": { en: "Essence *is* essentially reflection — shining within itself.", es: "La Esencia *es* esencialmente reflexión — aparecer en sí misma." },
    "w02_w01": { en: "Show is the shining of Essence *within itself*.", es: "La Apariencia es el aparecer de la Esencia *en sí misma*." },
    "w02_w03": { en: "Show is immediacy that is *mediated* through its negation.", es: "La Apariencia es la inmediatez que está *mediada* por su negación." },
    "w03_w05": { en: "Consummated reflection passes over into Ground.", es: "La reflexión consumada pasa al Fundamento." },
    "w03_b01": { en: "Reflection is the movement proper to Essence; the Concept, by contrast,", es: "La Reflexión es el movimiento propio de la Esencia; el Concepto, por contraste," },
    "w04_w05": { en: "The unity of Identity and Difference is Ground.", es: "La unidad de la Identidad y la Diferencia es el Fundamento." },
    "w05_w06": { en: "Ground is the immediate presupposition of Existence.", es: "El Fundamento es la presuposición inmediata de la Existencia." },
    "w05_w07": { en: "Ground externalizes itself into Appearance.", es: "El Fundamento se exterioriza en el Fenómeno." },
    "w07_w09": { en: "The truth of Appearance is Actuality.", es: "La verdad del Fenómeno es la Realidad Efectiva." },
    "w07_w08": { en: "The essential relation is the exhibited truth of Appearance.", es: "La relación esencial es la verdad expuesta del Fenómeno." },
    "w09_w10": { en: "The highest, most concrete determination of Actuality is the Absolute.", es: "La determinación más alta y concreta de la Realidad Efectiva es lo Absoluto." },
    "w09_w13": { en: "Actuality in its highest form (Interaction) is the genesis", es: "La Realidad Efectiva en su forma más alta (Acción Recíproca) es la génesis" },
    "w10_w11": { en: "The Absolute shows itself as Substance.", es: "Lo Absoluto se muestra como Substancia." },
    "w11_w12": { en: "Substance externalizes itself as Cause.", es: "La Substancia se exterioriza como Causa." },
    "w11_w13": { en: "The dialectical movement of Substance through Causality and Interaction", es: "El movimiento dialéctico de la Substancia a través de la Causalidad y la Acción Recíproca" },
    "w12_w13": { en: "The truth of Causality is Interaction.", es: "La verdad de la Causalidad es la Acción Recíproca." },
    "w13_b01": { en: "Interaction is the *immediate genesis of the Concept*.", es: "La Acción Recíproca es la *génesis inmediata del Concepto*." },
    "b01_b03": { en: "The Concept particularizes itself into Judgment.", es: "El Concepto se particulariza en Juicio." },
    "b01_b04": { en: "The *truth* of Judgment is the Syllogism.", es: "La *verdad* del Juicio es el Silogismo." },
    "b03_b04": { en: "The completed Judgment passes over into the Syllogism.", es: "El Juicio consumado pasa al Silogismo." },
    "b04_b05": { en: "The Syllogism in its fully developed form of necessity passes over into Objectivity.", es: "El Silogismo en su forma plenamente desarrollada de necesidad pasa a la Objetividad." },
    "b05_b01": { en: "Objectivity is the Concept in its externality.", es: "La Objetividad es el Concepto en su exterioridad." },
    "b05_b07": { en: "The unity of Concept and Objectivity is the Idea.", es: "La unidad del Concepto y la Objetividad es la Idea." },
    "b06_b07": { en: "Completed Teleology passes over into the Idea.", es: "La Teleología consumada pasa a la Idea." },
    "b06_b08": { en: "Life is the immediate form of the Idea — inner purposiveness.", es: "La Vida es la forma inmediata de la Idea — finalidad interna." },
    "b07_b07": { en: "The Idea is their absolute unity.", es: "La Idea es su unidad absoluta." },
    "b07_s01": { en: "The Idea is the totality of the entire logical movement.", es: "La Idea es la totalidad de todo el movimiento lógico." },
    "b07_w09": { en: "The Idea is the *true* actuality — as opposed to the merely", es: "La Idea es la *verdadera* realidad — frente a la meramente" },
    "b08_b07": { en: "First, immediate shape of the Idea.", es: "Primera figura inmediata de la Idea." },
    "b08_b09": { en: "Life dies and passes over into Cognition — spirit elevates itself above", es: "La Vida muere y pasa al Conocer — el espíritu se eleva sobre" },
    "b09_b08": { en: "Cognition proceeds from Life.", es: "El Conocer procede de la Vida." },
    "b09_b10": { en: "The unity of theoretical and practical cognition.", es: "La unidad del conocer teórico y práctico." },
    "b10_s01": { en: "The Absolute Idea returns to Being — but as comprehended Being (the", es: "La Idea Absoluta retorna al Ser — pero como Ser comprendido (el" },
    "b10_b10": { en: "They are sublated moments of the Absolute Idea.", es: "Son momentos superados de la Idea Absoluta." },
    "b10_b10m": { en: "The Method is the consciousness of the form of the inner self-movement", es: "El Método es la conciencia de la forma del automovimiento interno" }
  }
};
