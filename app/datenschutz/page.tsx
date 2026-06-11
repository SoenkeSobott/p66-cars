'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useLanguage } from '@/lib/LanguageContext'

const de = (
  <>
    <h1 className="text-3xl font-bold text-slate-900 mb-2">Datenschutzerklärung</h1>
    <p className="text-slate-500 text-sm mb-8">Gemäß DSGVO und BDSG</p>

    <section className="mb-8">
      <h2 className="text-lg font-semibold text-slate-900 mb-3">1. Verantwortlicher</h2>
      <p className="text-slate-600">
        Verantwortlicher im Sinne der DSGVO ist:<br /><br />
        Daniel Heimann<br />
        Grenzacherstrasse 32<br />
        4058 Basel<br />
        Schweiz<br /><br />
        E-Mail: daniel.heimann@gmail.com
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-lg font-semibold text-slate-900 mb-3">2. Welche Daten wir erheben</h2>
      <p className="text-slate-600 mb-3">
        Wir erheben nur die Daten, die Sie uns aktiv über unsere Kontaktformulare mitteilen:
      </p>
      <ul className="list-disc list-inside text-slate-600 space-y-1">
        <li>Name</li>
        <li>E-Mail-Adresse</li>
        <li>Telefonnummer (optional)</li>
        <li>Fahrzeugdetails oder Inserat-Link (bei Käuferanfragen)</li>
        <li>Standort des Fahrzeugs (bei Käuferanfragen)</li>
        <li>Wunschtermin (bei Käuferanfragen, optional)</li>
        <li>Einsatzgebiet und Qualifikationen (bei Mechanikeranmeldungen)</li>
        <li>Freitext-Hinweise (optional)</li>
      </ul>
      <p className="text-slate-600 mt-3">
        Wir setzen keine Cookies ein und verwenden kein Tracking oder Web-Analyse-Tools.
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-lg font-semibold text-slate-900 mb-3">3. Zweck und Rechtsgrundlage</h2>
      <p className="text-slate-600">
        Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage bzw. Registrierung verwendet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) sowie Art. 6 Abs. 1 lit. a DSGVO (Einwilligung durch das Absenden des Formulars).
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-lg font-semibold text-slate-900 mb-3">4. E-Mail-Versand</h2>
      <p className="text-slate-600">
        Zur technischen Übermittlung von Formularinhalten nutzen wir den E-Mail-Dienst Gmail (Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA). Die Daten werden zur Übertragung kurzzeitig durch Google-Server geleitet. Google ist unter dem EU-US Data Privacy Framework zertifiziert. Weitere Informationen finden Sie in der Datenschutzerklärung von Google: policies.google.com/privacy.
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-lg font-semibold text-slate-900 mb-3">5. Speicherdauer</h2>
      <p className="text-slate-600">
        Ihre Daten werden nur so lange gespeichert, wie es für die Bearbeitung Ihrer Anfrage erforderlich ist. Sobald Ihre Anfrage abschließend bearbeitet wurde und keine gesetzlichen Aufbewahrungspflichten bestehen, werden Ihre Daten gelöscht.
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-lg font-semibold text-slate-900 mb-3">6. Ihre Rechte</h2>
      <p className="text-slate-600 mb-3">Sie haben das Recht auf:</p>
      <ul className="list-disc list-inside text-slate-600 space-y-1">
        <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
        <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
        <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
        <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
      </ul>
      <p className="text-slate-600 mt-3">
        Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: daniel.heimann@gmail.com
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-lg font-semibold text-slate-900 mb-3">7. Beschwerderecht</h2>
      <p className="text-slate-600">
        Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren. Die zuständige Aufsichtsbehörde richtet sich nach Ihrem Wohnort in Schweiz.
      </p>
    </section>
  </>
)

const en = (
  <>
    <h1 className="text-3xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
    <p className="text-slate-500 text-sm mb-8">In accordance with GDPR</p>

    <section className="mb-8">
      <h2 className="text-lg font-semibold text-slate-900 mb-3">1. Data Controller</h2>
      <p className="text-slate-600">
        The data controller within the meaning of the GDPR is:<br /><br />
        Daniel Heimann<br />
        Grenzacherstrasse 32<br />
        4058 Basel<br />
        Switzerland<br /><br />
        Email: daniel.heimann@gmail.com
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-lg font-semibold text-slate-900 mb-3">2. Data We Collect</h2>
      <p className="text-slate-600 mb-3">
        We only collect data that you actively provide via our contact forms:
      </p>
      <ul className="list-disc list-inside text-slate-600 space-y-1">
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number (optional)</li>
        <li>Vehicle details or listing link (buyer requests)</li>
        <li>Vehicle location (buyer requests)</li>
        <li>Preferred date (buyer requests, optional)</li>
        <li>Service area and qualifications (mechanic applications)</li>
        <li>Free-text notes (optional)</li>
      </ul>
      <p className="text-slate-600 mt-3">
        We do not use cookies, tracking, or web analytics tools.
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-lg font-semibold text-slate-900 mb-3">3. Purpose and Legal Basis</h2>
      <p className="text-slate-600">
        Your data is used exclusively to process your enquiry or registration. The legal basis is Art. 6(1)(b) GDPR (pre-contractual measures) and Art. 6(1)(a) GDPR (consent by submitting the form).
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-lg font-semibold text-slate-900 mb-3">4. Email Delivery</h2>
      <p className="text-slate-600">
        We use Gmail (Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA) to technically transmit form submissions. Data is briefly routed through Google servers during transmission. Google is certified under the EU-US Data Privacy Framework. For more information, see Google&apos;s privacy policy at policies.google.com/privacy.
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-lg font-semibold text-slate-900 mb-3">5. Retention Period</h2>
      <p className="text-slate-600">
        Your data is stored only as long as necessary to process your enquiry. Once your request has been fully handled and no statutory retention obligations exist, your data will be deleted.
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-lg font-semibold text-slate-900 mb-3">6. Your Rights</h2>
      <p className="text-slate-600 mb-3">You have the right to:</p>
      <ul className="list-disc list-inside text-slate-600 space-y-1">
        <li>Access your stored data (Art. 15 GDPR)</li>
        <li>Rectification of inaccurate data (Art. 16 GDPR)</li>
        <li>Erasure of your data (Art. 17 GDPR)</li>
        <li>Restriction of processing (Art. 18 GDPR)</li>
        <li>Data portability (Art. 20 GDPR)</li>
        <li>Objection to processing (Art. 21 GDPR)</li>
      </ul>
      <p className="text-slate-600 mt-3">
        To exercise your rights, please contact: daniel.heimann@gmail.com
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-lg font-semibold text-slate-900 mb-3">7. Right to Lodge a Complaint</h2>
      <p className="text-slate-600">
        You have the right to lodge a complaint with a data protection supervisory authority regarding the processing of your personal data. The competent authority depends on your place of residence in Switzerland.
      </p>
    </section>
  </>
)

export default function DatenschutzPage() {
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
