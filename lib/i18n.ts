export type Lang = 'de' | 'en'

export const translations = {
  de: {
    nav: {
      brand: 'p66.cars',
      forMechanics: 'Sie sind Mechaniker? →',
      forBuyers: 'Fahrzeug kaufen? →',
    },
    home: {
      eyebrow: 'Für wen sind Sie hier?',
      title: 'Gebrauchtwagen kaufen — sicher, transparent, unabhängig',
      subtitle:
        'Wir verbinden Käufer mit qualifizierten Kfz-Experten, die das Fahrzeug vor Ort prüfen. Einfach, fair und ohne Risiko.',
      buyerCard: {
        title: 'Ich möchte ein Auto kaufen',
        subtitle: 'Lassen Sie das Fahrzeug von einem unabhängigen Mechaniker prüfen – bevor Sie unterschreiben',
        cta: 'Mechaniker anfragen',
      },
      mechanicCard: {
        title: 'Ich bin Mechaniker',
        subtitle: 'Übernehmen Sie flexible Prüfaufträge in Ihrer Region und verdienen Sie hinzu',
        cta: 'Zum Netzwerk beitreten',
      },
    },
    buyers: {
      badge: 'Für Fahrzeugkäufer',
      hero: {
        title: 'Kaufen Sie keinen Gebrauchtwagen ohne Expertenurteil',
        subtitle:
          'Privatverkäufer verschweigen Mängel. Händler setzen auf Zeitdruck. Wir stellen Ihnen einen unabhängigen Kfz-Meister zur Seite — der das Fahrzeug prüft, bevor Sie sich entscheiden.',
        priceBadge: 'Ab 70 € pro Fahrzeugprüfung',
        cta: 'So funktioniert\'s',
      },
      howItWorks: {
        title: 'So funktioniert\'s',
        steps: [
          {
            title: 'Kontaktformular ausfüllen',
            description: 'Geben Sie Fahrzeugdetails, Standort und Ihren Wunschtermin an. Dauert nur 2 Minuten.',
          },
          {
            title: 'Servicegebühr bezahlen',
            description: 'Sie bezahlen 70 € sicher über unsere Plattform. Bei Nichtdurchführung erhalten Sie Ihr Geld vollständig zurück.',
          },
          {
            title: 'Wir finden Ihren Mechaniker',
            description: 'Wir vermitteln einen qualifizierten Kfz-Meister aus unserem geprüften Netzwerk in Ihrer Nähe.',
          },
          {
            title: 'Mechaniker prüft das Fahrzeug',
            description: 'Vor-Ort-Inspektion anhand unserer strukturierten Checkliste — gründlich, unabhängig und ohne Interessenkonflikt.',
          },
          {
            title: 'Termin begleiten (optional)',
            description: 'Auf Wunsch nehmen Sie den Termin persönlich wahr und lassen sich alles direkt vor Ort erklären.',
          },
          {
            title: 'Prüfbericht erhalten',
            description: 'Sie erhalten die ausgefüllte Checkliste und eine klare, ehrliche Einschätzung zum Fahrzeugzustand.',
          },
          {
            title: 'Wir übernehmen die Abrechnung',
            description: 'Nach erfolgter Prüfung leiten wir die Vergütung direkt an den Mechaniker weiter. Kein Aufwand für Sie.',
          },
        ],
      },
      guarantee: {
        title: 'Geld-zurück-Garantie',
        description:
          'Sollte der Mechaniker den Termin nicht wahrnehmen können, erhalten Sie selbstverständlich den vollen Betrag zurück — ohne Diskussion.',
      },
      benefits: {
        title: 'Warum p66.cars?',
        items: [
          {
            title: 'Strukturierte Checkliste',
            description: 'Unser standardisiertes Prüfprotokoll deckt alle relevanten Bauteile ab — Motor, Karosserie, Elektronik, Fahrwerk und mehr.',
          },
          {
            title: 'Vollständig unabhängig',
            description: 'Ihr Mechaniker arbeitet ausschließlich in Ihrem Interesse. Kein Provision, kein Interessenkonflikt, kein Verkaufsdruck.',
          },
          {
            title: 'Optional vor Ort dabei',
            description: 'Sie wollen den Termin selbst wahrnehmen? Kein Problem — begleiten Sie die Prüfung und lassen Sie sich alles erklären.',
          },
          {
            title: 'Sicher & transparent',
            description: 'Sie zahlen an uns, wir zahlen den Mechaniker. Klarer Ablauf, faire Preise, keine versteckten Kosten.',
          },
        ],
      },
      cta: {
        title: 'Bereit für eine unabhängige Fahrzeugprüfung?',
        subtitle: 'Füllen Sie das Formular aus — wir kümmern uns um alles Weitere.',
        button: 'Prüfung anfragen — demnächst verfügbar',
      },
    },
    mechanics: {
      badge: 'Für Kfz-Profis',
      hero: {
        title: 'Ihr Wissen. Ihr Tempo. Ihr Nebenverdienst.',
        subtitle:
          'Werden Sie Teil unseres Netzwerks qualifizierter Mechaniker und übernehmen Sie Fahrzeugprüfungen in Ihrer Region — flexibel, unkompliziert und fair vergütet.',
        cta: 'So funktioniert\'s',
      },
      howItWorks: {
        title: 'So funktioniert\'s',
        steps: [
          {
            title: 'Profil anlegen',
            description: 'Name, Standort, Qualifikationen und Kontaktdaten hinterlegen. Kostenlos und in wenigen Minuten erledigt.',
          },
          {
            title: 'Anfragen erhalten',
            description: 'Wir informieren Sie über Prüfaufträge in Ihrer Region, die zu Ihrer Verfügbarkeit passen.',
          },
          {
            title: 'Selbst entscheiden',
            description: 'Sie wählen, welche Aufträge Sie annehmen. Keine Mindestquoten, kein Druck, keine Verpflichtungen.',
          },
          {
            title: 'Fahrzeug prüfen',
            description: 'Vor-Ort-Termin mit dem Käufer. Sie arbeiten unsere strukturierte Checkliste durch — professionell und unkompliziert.',
          },
          {
            title: 'Vergütung erhalten',
            description: 'Wir überweisen Ihre Vergütung direkt nach Abschluss. Einfach, pünktlich und zuverlässig.',
          },
        ],
      },
      benefits: {
        title: 'Ihre Vorteile',
        items: [
          {
            title: 'Attraktiver Nebenverdienst',
            description: 'Pro Prüfung verdienen Sie 50–100 €. Ideal für freie Tage, Feierabende oder Wochenenden.',
          },
          {
            title: 'Vollständig flexibel',
            description: 'Nehmen Sie nur Aufträge an, die in Ihren Alltag passen. Keine Mindestanzahl, keine Bindung.',
          },
          {
            title: 'Einfache Abwicklung',
            description: 'Wir übernehmen Kundenkontakt, Bezahlung und Kommunikation. Sie konzentrieren sich auf die Prüfung.',
          },
          {
            title: 'Prüfunterlagen inklusive',
            description: 'Sie erhalten von uns eine professionelle Checkliste — klar strukturiert und direkt einsetzbar.',
          },
        ],
      },
      cta: {
        title: 'Bereit, unserem Netzwerk beizutreten?',
        subtitle: 'Registrieren Sie sich und erhalten Sie Prüfanfragen aus Ihrer Region.',
        button: 'Als Mechaniker registrieren — demnächst verfügbar',
      },
    },
    footer: { tagline: 'Wir verbinden Autokäufer mit qualifizierten Fachleuten — einfach, fair und zuverlässig.' },
  },

  en: {
    nav: {
      brand: 'p66.cars',
      forMechanics: 'Are you a mechanic? →',
      forBuyers: 'Looking to buy? →',
    },
    home: {
      eyebrow: 'Who are you here for?',
      title: 'Buy a used car — safely, transparently, independently',
      subtitle:
        'We connect buyers with qualified mechanics who inspect the vehicle on-site. Simple, fair, and risk-free.',
      buyerCard: {
        title: "I'm buying a car",
        subtitle: "Get an independent mechanic to inspect the vehicle before you sign",
        cta: 'Find a mechanic',
      },
      mechanicCard: {
        title: "I'm a mechanic",
        subtitle: 'Take on flexible inspection jobs in your area and earn extra income',
        cta: 'Join the network',
      },
    },
    buyers: {
      badge: 'For car buyers',
      hero: {
        title: "Don't buy a used car without an expert opinion",
        subtitle:
          'Private sellers hide faults. Dealers rely on time pressure. We give you an independent, qualified mechanic who inspects the car before you decide.',
        priceBadge: 'From €70 per inspection',
        cta: 'See how it works',
      },
      howItWorks: {
        title: 'How it works',
        steps: [
          {
            title: 'Fill in the request form',
            description: 'Provide vehicle details, location, and your preferred appointment time. Takes just 2 minutes.',
          },
          {
            title: 'Pay the service fee',
            description: 'Secure payment of €70 via our platform. Full refund guaranteed if the inspection cannot take place.',
          },
          {
            title: 'We find your mechanic',
            description: 'We match you with a qualified mechanic from our vetted network in your area.',
          },
          {
            title: 'Mechanic inspects the vehicle',
            description: 'On-site inspection using our structured checklist — thorough, independent, and conflict-free.',
          },
          {
            title: 'Join the appointment (optional)',
            description: 'Want to be there? Attend the inspection in person and have everything explained on the spot.',
          },
          {
            title: 'Receive your inspection report',
            description: 'Get the completed checklist and a clear, honest assessment of the vehicle\'s condition.',
          },
          {
            title: 'We handle the payment',
            description: "Once the inspection is done, we forward the fee to the mechanic. No hassle on your end.",
          },
        ],
      },
      guarantee: {
        title: 'Money-back guarantee',
        description:
          "If the mechanic cannot attend the appointment, you receive a full refund — no questions asked.",
      },
      benefits: {
        title: 'Why p66.cars?',
        items: [
          {
            title: 'Structured inspection',
            description: 'Our standardised checklist covers all critical components — engine, bodywork, electrics, suspension, and more.',
          },
          {
            title: 'Fully independent',
            description: 'Your mechanic works solely in your interest. No commission, no conflicts of interest, no sales pressure.',
          },
          {
            title: 'Optional on-site attendance',
            description: 'Want to be present? Join the inspection and get everything walked through face to face.',
          },
          {
            title: 'Safe & transparent',
            description: 'You pay us, we pay the mechanic. Clear process, fair pricing, no hidden costs.',
          },
        ],
      },
      cta: {
        title: 'Ready for an independent vehicle inspection?',
        subtitle: 'Fill in the form — we take care of everything else.',
        button: 'Request an inspection — coming soon',
      },
    },
    mechanics: {
      badge: 'For mechanics & technicians',
      hero: {
        title: 'Your expertise. Your schedule. Your income.',
        subtitle:
          'Join our network of qualified mechanics and take on vehicle inspection jobs in your area — flexible, straightforward, and fairly paid.',
        cta: 'See how it works',
      },
      howItWorks: {
        title: 'How it works',
        steps: [
          {
            title: 'Create your profile',
            description: 'Add your name, location, qualifications, and contact details. Free and done in minutes.',
          },
          {
            title: 'Receive inspection requests',
            description: 'We notify you of jobs in your area that match your availability.',
          },
          {
            title: 'You decide',
            description: 'Choose which jobs to accept. No minimum quota, no pressure, no obligations.',
          },
          {
            title: 'Carry out the inspection',
            description: 'On-site appointment with the buyer. Work through our structured checklist — professional and straightforward.',
          },
          {
            title: 'Get paid',
            description: 'We transfer your fee directly after the job is completed. Simple, on time, and reliable.',
          },
        ],
      },
      benefits: {
        title: 'What you get',
        items: [
          {
            title: 'Attractive extra income',
            description: 'Earn €50–100 per inspection. Perfect for days off, evenings, or weekends.',
          },
          {
            title: 'Fully flexible',
            description: 'Only take on jobs that fit your life. No minimum commitments, no lock-in.',
          },
          {
            title: 'We handle the admin',
            description: 'We manage customer contact, payment, and communication. You focus on the inspection.',
          },
          {
            title: 'Inspection materials included',
            description: 'We provide a professional, clearly structured checklist — ready to use from day one.',
          },
        ],
      },
      cta: {
        title: 'Ready to join our network?',
        subtitle: 'Register your profile and start receiving inspection requests in your area.',
        button: 'Register as a mechanic — coming soon',
      },
    },
    footer: { tagline: 'We connect car buyers with qualified professionals — simple, fair, and reliable.' },
  },
}

export type T = typeof translations.de
