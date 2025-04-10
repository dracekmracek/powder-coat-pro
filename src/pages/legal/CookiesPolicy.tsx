import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CookiesPolicy: React.FC = () => {
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

            <h1 className="text-3xl font-bold mb-8 text-gray-900">Zásady používání cookies</h1>
            
            <div className="prose prose-primary max-w-none">
              <p className="text-gray-600">
                Poslední aktualizace: {currentYear}
              </p>

              <h2>1. Co jsou soubory cookies</h2>
              <p>
                Cookies jsou malé textové soubory, které jsou ukládány do vašeho zařízení (počítač, mobilní telefon nebo tablet) 
                při návštěvě našich webových stránek. Tyto soubory nám umožňují zapamatovat si vaše preference, 
                přizpůsobit obsah stránek vašim potřebám a zlepšovat váš uživatelský zážitek.
              </p>

              <h2>2. Typy cookies, které používáme</h2>
              <p>
                Na našich webových stránkách používáme následující kategorie cookies:
              </p>

              <h3>2.1 Nezbytné cookies</h3>
              <p>
                Tyto cookies jsou nezbytné pro správné fungování webových stránek. Umožňují základní funkce, jako je navigace 
                na stránce a přístup k zabezpečeným oblastem webu. Bez těchto cookies by naše stránky nefungovaly správně. 
                Tyto cookies neukládají žádné informace, které by bylo možné přímo přiřadit ke konkrétní osobě.
              </p>

              <h3>2.2 Preferenční cookies</h3>
              <p>
                Tyto cookies umožňují webovým stránkám zapamatovat si informace, které mění způsob, jakým se webová stránka 
                chová nebo jak vypadá (například preferovaný jazyk nebo region, ve kterém se nacházíte). Tyto cookies zlepšují 
                uživatelský zážitek, ale nejsou nezbytné pro fungování webu.
              </p>

              <h3>2.3 Analytické cookies</h3>
              <p>
                Analytické cookies nám pomáhají shromažďovat informace o tom, jak návštěvníci používají naše webové stránky. 
                Tyto cookies nám poskytují anonymní informace, které nám pomáhají pochopit, které části našeho webu jsou 
                nejzajímavější pro naše návštěvníky, a sledovat, jak uživatelé na našich stránkách interagují. To nám umožňuje 
                vylepšovat funkce a obsah webových stránek.
              </p>

              <h3>2.4 Marketingové cookies</h3>
              <p>
                Tyto cookies se používají k sledování návštěvníků napříč webovými stránkami. Jejich účelem je zobrazovat reklamy, 
                které jsou relevantní a zajímavé pro jednotlivé uživatele, a tím cennější pro vydavatele a inzerenty třetích stran.
              </p>

              <h2>3. Jak můžete spravovat cookies</h2>
              <p>
                Při první návštěvě našich webových stránek vám bude zobrazeno oznámení o používání cookies. 
                Zde můžete udělit souhlas s použitím všech cookies, odmítnout všechny volitelné cookies, nebo 
                individuálně nastavit, které kategorie cookies chcete povolit.
              </p>
              <p>
                Své preference ohledně cookies můžete kdykoli změnit kliknutím na tlačítko "Nastavení cookies", 
                které je dostupné v dolní části každé stránky našeho webu.
              </p>
              <p>
                Kromě toho můžete cookies spravovat nebo odstranit podle svých preferencí prostřednictvím nastavení vašeho 
                webového prohlížeče. Upozorňujeme, že odstranění nebo blokování cookies může ovlivnit funkčnost našich webových 
                stránek a některé služby nemusí být dostupné nebo nemusí fungovat správně.
              </p>

              <h2>4. Cookies třetích stran</h2>
              <p>
                Některé cookies na našich webových stránkách jsou nastaveny třetími stranami, které poskytují určité služby, 
                jako například nástroje pro analýzu návštěvnosti nebo sociální média. Tyto třetí strany mohou používat cookies, 
                web beacons a podobné technologie ke shromažďování nebo přijímání informací z našeho webu. Tyto informace mohou 
                být použity k poskytování služeb měření, analýzy návštěvnosti, personalizaci reklam a dalších funkcí.
              </p>

              <h2>5. Doba uchování cookies</h2>
              <p>
                Doba uchování cookies se liší v závislosti na typu cookies:
              </p>
              <ul>
                <li>Relační cookies jsou dočasné a jsou odstraněny po zavření prohlížeče.</li>
                <li>Trvalé cookies zůstávají ve vašem zařízení po definovanou dobu nebo dokud je ručně neodstraníte.</li>
              </ul>
              <p>
                Konkrétní doba uchování pro každý soubor cookie je specifikována v našem nástroji pro správu cookies, 
                který je dostupný po kliknutí na tlačítko "Nastavení cookies".
              </p>

              <h2>6. Právní základ pro používání cookies</h2>
              <p>
                V souladu s nařízením EU o ochraně osobních údajů (GDPR) a dalšími platnými předpisy o ochraně osobních údajů 
                je právním základem pro:
              </p>
              <ul>
                <li>Nezbytné cookies: Náš oprávněný zájem zajistit správné fungování a bezpečnost našich webových stránek.</li>
                <li>Všechny ostatní typy cookies: Váš souhlas, který jste udělili prostřednictvím banneru cookies nebo nastavení vašeho prohlížeče.</li>
              </ul>

              <h2>7. Aktualizace zásad používání cookies</h2>
              <p>
                Tyto zásady používání cookies můžeme čas od času aktualizovat, abychom odráželi například změny v cookies, 
                které používáme, nebo z jiných provozních, právních nebo regulačních důvodů. Proto vás prosíme, abyste pravidelně 
                navštěvovali tuto stránku, abyste byli informováni o používání cookies a souvisejících technologiích.
              </p>
              <p>
                Datum poslední aktualizace těchto zásad je uvedeno v horní části této stránky.
              </p>

              <h2>8. Kontaktujte nás</h2>
              <p>
                Pokud máte jakékoli dotazy týkající se používání cookies na našich webových stránkách, kontaktujte nás prosím:
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

export default CookiesPolicy; 