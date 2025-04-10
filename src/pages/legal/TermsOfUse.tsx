import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsOfUse: React.FC = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  return (
    <div id="app-container">
      <Navbar />
      <div className="min-h-screen bg-background pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <button 
              onClick={() => navigate(-1)} 
              className="inline-flex items-center text-sm text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft size={16} className="mr-1" />
              <span>Zpět</span>
            </button>

            <h1 className="text-3xl font-bold mb-8 text-gray-900">Podmínky použití</h1>
            
            <div className="prose prose-primary max-w-none">
              <p className="text-gray-600">
                Poslední aktualizace: {currentYear}
              </p>

              <h2>1. Úvod</h2>
              <p>
                Vítejte na webových stránkách společnosti Betrim s.r.o. (dále jen "my", "naše" nebo "společnost"). 
                Tyto podmínky použití upravují vaše používání našich webových stránek včetně jakýchkoli obsahů, 
                funkcionalit a služeb nabízených na nebo prostřednictvím našich webových stránek.
              </p>
              <p>
                Přečtěte si prosím tyto podmínky použití pečlivě před tím, než začnete používat naše webové stránky. 
                Používáním našich webových stránek potvrzujete, že přijímáte a souhlasíte s dodržováním těchto podmínek použití. 
                Pokud nesouhlasíte s těmito podmínkami použití, nesmíte používat naše webové stránky.
              </p>

              <h2>2. Změny podmínek</h2>
              <p>
                Vyhrazujeme si právo podle našeho vlastního uvážení revidovat a aktualizovat tyto podmínky použití. 
                Všechny změny jsou účinné okamžitě po jejich zveřejnění a vztahují se na všechny přístupy a používání 
                této webové stránky. Pokračování v používání webových stránek po zveřejnění revidovaných podmínek použití 
                znamená, že přijímáte a souhlasíte se změnami.
              </p>
              <p>
                Souhlasíte s tím, že budete pravidelně kontrolovat tyto podmínky, abyste se seznámili s aktualizacemi. 
                V horní části této stránky je uvedeno datum poslední revize těchto podmínek použití.
              </p>

              <h2>3. Přístup k webovým stránkám a bezpečnost účtu</h2>
              <p>
                Vyhrazujeme si právo stáhnout nebo změnit naše webové stránky a jakékoli služby nebo materiály, 
                které poskytujeme na webových stránkách, podle našeho uvážení bez předchozího upozornění. 
                Neneseme odpovědnost, pokud z jakéhokoli důvodu nejsou všechny nebo některé části webových stránek 
                v určitém okamžiku nebo po určitou dobu k dispozici.
              </p>
              <p>
                Můžeme příležitostně omezit přístup k některým částem webových stránek nebo celým webovým stránkám 
                uživatelům, včetně registrovaných uživatelů.
              </p>

              <h2>4. Duševní vlastnictví</h2>
              <p>
                Webové stránky a jejich celý obsah, funkce a funkcionalita (včetně, ale ne výhradně, všech informací, 
                softwaru, textu, zobrazení, obrázků, videa a audia, a jejich designu, výběru a uspořádání) jsou ve 
                vlastnictví společnosti, jejích poskytovatelů licencí nebo jiných poskytovatelů těchto materiálů a jsou 
                chráněny autorskými právy, ochrannými známkami, patenty, obchodním tajemstvím a dalšími právy duševního vlastnictví.
              </p>
              <p>
                Můžete používat webové stránky pouze pro legitimní účely a v souladu s těmito podmínkami použití. 
                Souhlasíte s tím, že nebudete používat webové stránky:
              </p>
              <ul>
                <li>
                  Způsobem, který porušuje jakýkoli platný národní, federální, státní, místní nebo mezinárodní zákon nebo předpis.
                </li>
                <li>
                  Pro účely vykořisťování, poškozování nebo pokusu o vykořisťování nebo poškozování nezletilých jakýmkoli způsobem.
                </li>
                <li>
                  K přenosu nebo zajištění zaslání jakéhokoli reklamního nebo propagačního materiálu bez našeho předchozího písemného souhlasu.
                </li>
                <li>
                  K vydávání se za nebo pokusu o vydávání se za společnost, zaměstnance společnosti, jiného uživatele nebo jakoukoli jinou osobu nebo subjekt.
                </li>
                <li>
                  Jakýmkoli způsobem, který by mohl deaktivovat, přetížit, poškodit nebo narušit stránky nebo zasahovat do používání stránek jakoukoliv jinou stranou.
                </li>
              </ul>

              <h2>5. Omezení odpovědnosti</h2>
              <p>
                V žádném případě společnost, její přidružené společnosti nebo jejich poskytovatelé licencí, poskytovatelé služeb, 
                zaměstnanci, agenti, vedoucí pracovníci nebo ředitelé nebudou odpovědní za škody jakéhokoli druhu, vyplývající 
                z nebo v souvislosti s vaším používáním nebo neschopností používat webové stránky, jakékoli webové stránky 
                propojené s nimi, jakýkoli obsah na webových stránkách nebo takových jiných webových stránkách.
              </p>
              <p>
                Tento oddíl nezpochybňuje práva, která nemohou být vyloučena nebo omezena, nebo vyloučení či omezení odpovědnosti 
                za smrt nebo zranění osoby vyplývající z nedbalosti, podvodu nebo podvodného zkreslení nebo jakoukoli jinou odpovědnost, 
                která nemůže být vyloučena nebo omezena podle platného práva.
              </p>

              <h2>6. Odškodnění</h2>
              <p>
                Souhlasíte s tím, že budete bránit, odškodňovat a chránit společnost, její přidružené společnosti, poskytovatele 
                licencí a poskytovatele služeb a jejich příslušné vedoucí pracovníky, ředitele, zaměstnance, dodavatele, zástupce, 
                poskytovatele licencí, poskytovatele služeb, subdodavatele, dodavatele, praktikanty a zaměstnance, před jakýmikoli 
                nároky nebo požadavky, včetně přiměřených poplatků za právní zastoupení, vznesených jakoukoli třetí stranou v důsledku 
                nebo vyplývajících z vašeho porušení těchto podmínek použití.
              </p>

              <h2>7. Rozhodné právo a jurisdikce</h2>
              <p>
                Všechny záležitosti týkající se webových stránek a těchto podmínek použití a jakýchkoli sporů nebo nároků z nich 
                vyplývajících nebo v souvislosti s nimi se řídí a vykládají v souladu s vnitrostátními zákony České republiky 
                bez ohledu na jejich kolizní normy.
              </p>
              <p>
                Jakékoli právní řízení nebo spor vyplývající z nebo v souvislosti s těmito podmínkami použití nebo webovými stránkami 
                bude výhradně předloženo příslušným soudům v České republice. Vzdáváte se však jakýchkoli námitek, že takové fórum není vhodné nebo pohodlné.
              </p>

              <h2>8. Oddělitelnost</h2>
              <p>
                Pokud by jakékoli ustanovení těchto podmínek použití bylo považováno za nezákonné, neplatné nebo z jakéhokoli důvodu 
                nevymahatelné, bude takové ustanovení považováno za oddělitelné od těchto podmínek použití a nebude to mít vliv 
                na platnost a vymahatelnost jakýchkoli zbývajících ustanovení.
              </p>

              <h2>9. Úplné ujednání</h2>
              <p>
                Podmínky použití představují úplnou dohodu mezi vámi a společností ohledně předmětu těchto podmínek použití 
                a nahrazují všechny předchozí a současné porozumění, dohody, prohlášení a záruky, jak písemné, tak ústní, ohledně předmětu podmínek použití.
              </p>

              <h2>10. Vaše připomínky a otázky</h2>
              <p>
                Tyto webové stránky jsou provozovány společností Betrim s.r.o., IČO: 25376837. Všechny zpětné vazby, komentáře, 
                požadavky na technickou podporu a další sdělení vztahující se k webovým stránkám by měly být adresovány na:
              </p>
              <p>
                Email: <a href="mailto:schich@betrim.cz" className="text-primary hover:text-primary/80">schich@betrim.cz</a><br />
                Telefon: <a href="tel:+420603269881" className="text-primary hover:text-primary/80">+420 603 269 881</a><br />
                Adresa: Masarykova 411, 742 45 Fulnek
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfUse; 