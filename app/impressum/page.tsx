'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useLanguage } from '@/lib/LanguageContext'

const de = (
  <>
    <h1 className="text-3xl font-bold text-slate-900 mb-8">Impressum</h1>

    <section className="mb-8">
      <h2 className="text-lg font-semibold text-slate-900 mb-3">Angaben gemäß § 5 TMG</h2>
      <p className="text-slate-600">
        Daniel Heimann<br />
        Grenzacherstrasse 32<br />
        4058 Basel<br />
        Schweiz
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-lg font-semibold text-slate-900 mb-3">Kontakt</h2>
      <p className="text-slate-600">
        E-Mail: daniel.heimann@gmail.com<br />
        Telefon: +41 79 877 45 43
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-lg font-semibold text-slate-900 mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
      <p className="text-slate-600">
        Daniel Heimann<br />
        Grenzacherstrasse 32<br />
        4058 Basel
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-lg font-semibold text-slate-900 mb-3">Haftungsausschluss</h2>
      <h3 className="font-medium text-slate-800 mb-2">Haftung für Inhalte</h3>
      <p className="text-slate-600 mb-4">
        Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
      </p>
      <h3 className="font-medium text-slate-800 mb-2">Haftung für Links</h3>
      <p className="text-slate-600">
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-lg font-semibold text-slate-900 mb-3">Urheberrecht</h2>
      <p className="text-slate-600">
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
      </p>
    </section>
  </>
)

const en = (
  <>
    <h1 className="text-3xl font-bold text-slate-900 mb-8">Legal Notice (Impressum)</h1>

    <section className="mb-8">
      <h2 className="text-lg font-semibold text-slate-900 mb-3">Information pursuant to § 5 TMG</h2>
      <p className="text-slate-600">
        Daniel Heimann<br />
        Grenzacherstrasse 32<br />
        4058 Basel<br />
        Switzerland
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-lg font-semibold text-slate-900 mb-3">Contact</h2>
      <p className="text-slate-600">
        Email: daniel.heimann@gmail.com<br />
        Phone: +41 79 877 45 43
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-lg font-semibold text-slate-900 mb-3">Responsible for content pursuant to § 55 para. 2 RStV</h2>
      <p className="text-slate-600">
        Daniel Heimann<br />
        Grenzacherstrasse 32<br />
        4058 Basel
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-lg font-semibold text-slate-900 mb-3">Disclaimer</h2>
      <h3 className="font-medium text-slate-800 mb-2">Liability for content</h3>
      <p className="text-slate-600 mb-4">
        As a service provider, we are responsible for our own content on these pages in accordance with general laws pursuant to § 7 para. 1 TMG. According to §§ 8 to 10 TMG, however, we are not obligated as a service provider to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
      </p>
      <h3 className="font-medium text-slate-800 mb-2">Liability for links</h3>
      <p className="text-slate-600">
        Our offer contains links to external third-party websites over whose content we have no influence. We therefore cannot assume any liability for this external content. The respective provider or operator of the linked pages is always responsible for their content.
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-lg font-semibold text-slate-900 mb-3">Copyright</h2>
      <p className="text-slate-600">
        The content and works on these pages created by the site operators are subject to German copyright law. Reproduction, editing, distribution and any kind of use outside the limits of copyright law require the written consent of the respective author or creator.
      </p>
    </section>
  </>
)

export default function ImpressumPage() {
  const { lang } = useLanguage()

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Nav />
      <div className="flex-1 max-w-2xl mx-auto w-full px-6 py-16">
        {lang === 'de' ? de : en}
      </div>
      <Footer />
    </main>
  )
}
