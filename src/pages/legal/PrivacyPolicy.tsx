import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy: React.FC = () => {
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

            <h1 className="text-3xl font-bold mb-8 text-gray-900">Zásady ochrany osobních údajů</h1>
            
            <div className="prose prose-primary max-w-none">
              <p className="text-gray-600">
                Poslední aktualizace: {currentYear}
              </p>

              <h2>1. Úvod</h2>
              <p>
                Společnost Betrim s.r.o., IČO: 25376837, se sídlem Masarykova 411, 742 45 Fulnek (dále jen "my", "naše" nebo "společnost") 
                respektuje vaše soukromí a zavazuje se chránit vaše osobní údaje. Tyto zásady ochrany osobních údajů vás informují o tom, 
                jak nakládáme s vašimi osobními údaji, když navštívíte naše webové stránky nebo nás kontaktujete, a informují vás o vašich 
                právech na ochranu osobních údajů a o tom, jak vás zákon chrání.
              </p>

              <h2>2. Důležité informace a kdo jsme</h2>
              <h3>2.1 Správce údajů</h3>
              <p>
                Betrim s.r.o. je správcem vašich osobních údajů. Jsme odpovědní za jejich ochranu a bezpečnost. Pokud máte jakékoli 
                dotazy týkající se těchto zásad nebo našich postupů při ochraně osobních údajů, kontaktujte nás na adrese:
              </p>
              <p>
                Email: <a href="mailto:schich@betrim.cz" className="text-primary hover:text-primary/80">schich@betrim.cz</a><br />
                Telefon: <a href="tel:+420603269881" className="text-primary hover:text-primary/80">+420 603 269 881</a><br />
                Adresa: Masarykova 411, 742 45 Fulnek
              </p>

              <h2>3. Osobní údaje, které shromažďujeme</h2>
              <p>
                Osobní údaje jsou veškeré informace o identifikované nebo identifikovatelné fyzické osobě. Můžeme 
                shromažďovat, používat, ukládat a předávat různé druhy osobních údajů o vás, které jsme seskupili následovně:
              </p>
              <ul>
                <li>
                  <strong>Identifikační údaje</strong> zahrnují jméno, příjmení, uživatelské jméno nebo podobný identifikátor.
                </li>
                <li>
                  <strong>Kontaktní údaje</strong> zahrnují e-mailovou adresu, telefonní číslo, adresu a další kontaktní údaje.
                </li>
                <li>
                  <strong>Technické údaje</strong> zahrnují internetový protokol (IP) adresa, údaje o přihlášení, typ a verze prohlížeče, 
                  nastavení časového pásma a umístění, typy a verze pluginů prohlížeče, operační systém a platforma a další technologie 
                  na zařízeních, která používáte pro přístup na naše webové stránky.
                </li>
                <li>
                  <strong>Údaje o používání</strong> zahrnují informace o tom, jak používáte naše webové stránky.
                </li>
                <li>
                  <strong>Marketingové a komunikační údaje</strong> zahrnují vaše preference při příjmu marketingových sdělení od nás 
                  a našich třetích stran a vaše komunikační preference.
                </li>
              </ul>

              <h3>3.1 Pokud nám neposkytujete osobní údaje</h3>
              <p>
                Pokud od vás požadujeme shromažďování osobních údajů podle zákona nebo podle podmínek smlouvy s vámi a vy nám tyto 
                údaje na požádání neposkytujete, možná nebudeme moci plnit smlouvu, kterou s vámi máme nebo se snažíme uzavřít 
                (například poskytnout vám služby). V takovém případě možná budeme muset zrušit službu, kterou od nás máte, 
                ale upozorníme vás, pokud k tomu dojde.
              </p>

              <h2>4. Jak shromažďujeme vaše osobní údaje</h2>
              <p>
                Používáme různé metody pro shromažďování údajů od vás a o vás, včetně:
              </p>
              <ul>
                <li>
                  <strong>Přímé interakce.</strong> Můžete nám poskytnout své identifikační, kontaktní a finanční údaje vyplněním 
                  formulářů nebo korespondencí s námi poštou, telefonem, e-mailem nebo jinak.
                </li>
                <li>
                  <strong>Automatizované technologie nebo interakce.</strong> Když interagujete s našimi webovými stránkami, můžeme 
                  automaticky shromažďovat technické údaje o vašem zařízení, procházení a vzorech. Tyto údaje shromažďujeme pomocí 
                  souborů cookies a dalších podobných technologií.
                </li>
                <li>
                  <strong>Třetí strany nebo veřejně dostupné zdroje.</strong> Můžeme získávat osobní údaje o vás od různých třetích 
                  stran a veřejných zdrojů, například analytických poskytovatelů, jako je Google.
                </li>
              </ul>

              <h2>5. Jak používáme vaše osobní údaje</h2>
              <p>
                Vaše osobní údaje budeme používat pouze tehdy, když nám to zákon umožňuje. Nejčastěji budeme používat vaše osobní 
                údaje za následujících okolností:
              </p>
              <ul>
                <li>
                  Pokud potřebujeme plnit smlouvu, kterou s vámi uzavíráme nebo jsme uzavřeli.
                </li>
                <li>
                  Pokud je to nezbytné pro naše oprávněné zájmy (nebo zájmy třetí strany) a vaše zájmy a základní práva tyto zájmy nepřevažují.
                </li>
                <li>
                  Pokud potřebujeme dodržet zákonnou nebo regulační povinnost.
                </li>
              </ul>
              <p>
                Obecně se nespoléháme na souhlas jako na právní základ pro zpracování vašich osobních údajů, s výjimkou případů, 
                kdy vám zasíláme marketingová sdělení třetích stran e-mailem nebo textovými zprávami.
              </p>

              <h3>5.1 Účely, pro které používáme vaše osobní údaje</h3>
              <p>
                Níže uvádíme popis všech způsobů, jakými plánujeme používat vaše osobní údaje, a které právní základy se na 
                tyto účely spoléháme. Dále jsme identifikovali, co jsou naše oprávněné zájmy, pokud je to relevantní.
              </p>
              <ul>
                <li>
                  <strong>Správa našeho vztahu s vámi</strong>, což zahrnuje:
                  <ul>
                    <li>Informování vás o změnách našich podmínek nebo zásad ochrany osobních údajů</li>
                    <li>Požádání vás o poskytnutí zpětné vazby nebo účast v průzkumu</li>
                  </ul>
                  <strong>Právní základ:</strong> Plnění smlouvy s vámi, dodržování zákonné povinnosti, naše oprávněné zájmy 
                  (aktualizace našich záznamů, sledování, jak zákazníci používají naše produkty/služby).
                </li>
                <li>
                  <strong>Poskytování našich webových stránek a služeb</strong>, včetně:
                  <ul>
                    <li>Správa našich webových stránek a poskytování našich služeb</li>
                    <li>Personalizace našich webových stránek pro vás</li>
                    <li>Správa a ochrana našeho podnikání a webových stránek (řešení problémů, analýza dat, testování, údržba systému, podpora, reportování a hosting dat)</li>
                  </ul>
                  <strong>Právní základ:</strong> Plnění smlouvy s vámi, naše oprávněné zájmy (provozování našeho podnikání, 
                  poskytování administrativních a IT služeb, síťová bezpečnost).
                </li>
                <li>
                  <strong>Marketing a komunikace</strong>:
                  <ul>
                    <li>Zasílání relevantních marketingových materiálů a informací o našich produktech a službách</li>
                    <li>Měření nebo pochopení efektivity reklamy, kterou vám poskytujeme</li>
                  </ul>
                  <strong>Právní základ:</strong> Oprávněné zájmy (rozvoj našich produktů/služeb a rozšiřování našeho podnikání), 
                  souhlas (v případě přímého marketingu).
                </li>
              </ul>

              <h3>5.2 Marketing</h3>
              <p>
                Snažíme se vám poskytnout volbu týkající se určitých aspektů používání osobních údajů, zejména v oblasti marketingu a reklamy.
              </p>
              <p>
                Můžete od nás obdržet marketingová sdělení, pokud jste nás požádali o informace, zakoupili od nás služby, poskytli 
                nám své údaje při vyplnění formuláře nebo jste se zaregistrovali do soutěže a v každém případě jste se neodhlásili 
                z odběru takového marketingu.
              </p>

              <h3>5.3 Odhlášení</h3>
              <p>
                Můžete nás kdykoli požádat, abychom vám přestali zasílat marketingové zprávy tím, že kliknete na odkaz pro odhlášení 
                v jakémkoli marketingovém e-mailu, který vám zašleme, nebo tím, že nás kontaktujete.
              </p>
              <p>
                Pokud se odhlásíte z odběru těchto marketingových zpráv, nebude se to vztahovat na osobní údaje, které nám poskytujete 
                v důsledku nákupu produktu/služby, záruční registrace, zkušenosti s produktem/službou nebo jiných transakcí.
              </p>

              <h3>5.4 Cookies</h3>
              <p>
                Můžete nastavit svůj prohlížeč tak, aby odmítal všechny nebo některé cookies prohlížeče, nebo aby vás upozornil, 
                když webové stránky nastavují nebo přistupují k cookies. Pokud vypnete nebo odmítnete cookies, vezměte prosím na 
                vědomí, že některé části těchto webových stránek se mohou stát nepřístupnými nebo nemusí fungovat správně.
              </p>
              <p>
                Pro více informací o cookies, které používáme, navštivte naše <a href="/cookies" className="text-primary hover:text-primary/80">Zásady používání cookies</a>.
              </p>

              <h2>6. Sdílení vašich osobních údajů</h2>
              <p>
                Možná budeme muset sdílet vaše osobní údaje s níže uvedenými stranami pro účely stanovené v tabulce v bodě 5:
              </p>
              <ul>
                <li>
                  <strong>Poskytovatelé služeb</strong>, kteří poskytují IT, systémové administrativní služby a další služby nezbytné pro fungování našeho podnikání.
                </li>
                <li>
                  <strong>Profesionální poradci</strong> včetně právníků, bankéřů, auditorů a pojistitelů, kteří poskytují konzultační, bankovní, právní, pojišťovací a účetní služby.
                </li>
                <li>
                  <strong>Finanční úřady, regulační orgány a další orgány</strong>, které vyžadují hlášení zpracovatelských činností za určitých okolností.
                </li>
              </ul>
              <p>
                Vyžadujeme od všech třetích stran, aby respektovaly bezpečnost vašich osobních údajů a nakládaly s nimi v souladu 
                se zákonem. Neumožňujeme našim poskytovatelům služeb třetích stran používat vaše osobní údaje pro jejich vlastní účely 
                a umožňujeme jim zpracovávat vaše osobní údaje pouze pro specifikované účely a v souladu s našimi pokyny.
              </p>

              <h2>7. Mezinárodní přenosy</h2>
              <p>
                Nepřenášíme vaše osobní údaje mimo Evropský hospodářský prostor (EHP). Pokud by k tomu v budoucnu došlo, zajistíme, 
                aby vaše osobní údaje byly chráněny podobným stupněm ochrany tím, že zajistíme, aby byl zaveden alespoň jeden 
                z následujících ochranných opatření:
              </p>
              <ul>
                <li>
                  Přeneseme vaše osobní údaje pouze do zemí, které byly Evropskou komisí uznány za poskytující 
                  odpovídající úroveň ochrany osobních údajů.
                </li>
                <li>
                  Při využívání určitých poskytovatelů služeb můžeme používat specifické smlouvy schválené 
                  Evropskou komisí, které poskytují osobním údajům stejnou ochranu, jakou mají v Evropě.
                </li>
              </ul>

              <h2>8. Bezpečnost údajů</h2>
              <p>
                Zavedli jsme vhodná bezpečnostní opatření, abychom zabránili náhodnému ztracení, použití nebo přístupu k vašim 
                osobním údajům neoprávněným způsobem, jejich změně nebo zveřejnění. Kromě toho omezujeme přístup k vašim osobním 
                údajům na ty zaměstnance, agenty, dodavatele a další třetí strany, které mají obchodní potřebu to vědět. 
                Budou zpracovávat vaše osobní údaje pouze podle našich pokynů a jsou vázáni povinností mlčenlivosti.
              </p>
              <p>
                Zavedli jsme postupy pro řešení jakéhokoli podezření na porušení bezpečnosti osobních údajů a budeme vás a 
                příslušný regulační úřad informovat o porušení, pokud jsme ze zákona povinni tak učinit.
              </p>

              <h2>9. Uchovávání údajů</h2>
              <p>
                Budeme uchovávat vaše osobní údaje pouze po dobu potřebnou k naplnění účelů, pro které jsme je shromáždili, 
                včetně splnění jakýchkoli právních, účetních nebo reportovacích požadavků.
              </p>
              <p>
                Při určování příslušné doby uchovávání osobních údajů zohledňujeme množství, povahu a citlivost osobních údajů, 
                potenciální riziko újmy z neoprávněného použití nebo zveřejnění vašich osobních údajů, účely, pro které 
                zpracováváme vaše osobní údaje, a zda můžeme tyto účely dosáhnout jinými prostředky, a platné právní požadavky.
              </p>
              <p>
                V některých případech nás můžete požádat o vymazání vašich údajů: viz níže pro další informace.
              </p>

              <h2>10. Vaše zákonná práva</h2>
              <p>
                Za určitých okolností máte podle zákonů o ochraně údajů ve vztahu k vašim osobním údajům následující práva:
              </p>
              <ul>
                <li>
                  <strong>Požadovat přístup</strong> k vašim osobním údajům (běžně známé jako "žádost o přístup subjektu údajů"). 
                  To vám umožňuje získat kopii osobních údajů, které o vás uchováváme, a zkontrolovat, že je zpracováváme zákonně.
                </li>
                <li>
                  <strong>Požadovat opravu</strong> osobních údajů, které o vás uchováváme. To vám umožňuje opravit jakékoli 
                  neúplné nebo nepřesné údaje, které o vás uchováváme.
                </li>
                <li>
                  <strong>Požadovat vymazání</strong> vašich osobních údajů. To vám umožňuje požádat nás o odstranění osobních 
                  údajů, kde neexistuje žádný dobrý důvod, abychom je nadále zpracovávali. Máte také právo požádat nás o vymazání 
                  vašich osobních údajů, pokud jste úspěšně uplatnili své právo na námitku proti zpracování (viz níže).
                </li>
                <li>
                  <strong>Podat námitku proti zpracování</strong> vašich osobních údajů, pokud se spoléháme na oprávněný zájem 
                  (nebo zájmy třetí strany) a existuje něco konkrétního ve vaší situaci, co vás vede k námitce proti zpracování 
                  na tomto základě, protože se domníváte, že to má dopad na vaše základní práva a svobody.
                </li>
                <li>
                  <strong>Požadovat omezení zpracování</strong> vašich osobních údajů. To vám umožňuje požádat nás o pozastavení 
                  zpracování vašich osobních údajů.
                </li>
                <li>
                  <strong>Požadovat přenos</strong> vašich osobních údajů vám nebo třetí straně. Poskytneme vám nebo vámi 
                  vybrané třetí straně vaše osobní údaje ve strukturovaném, běžně používaném, strojově čitelném formátu.
                </li>
                <li>
                  <strong>Kdykoli odvolat souhlas</strong>, kde se spoléháme na souhlas se zpracováním vašich osobních údajů. 
                  Toto však neovlivní zákonnost jakéhokoli zpracování provedeného před odvoláním vašeho souhlasu.
                </li>
              </ul>
              <p>
                Pokud chcete uplatnit některé z výše uvedených práv, kontaktujte nás na adrese schich@betrim.cz.
              </p>

              <h3>10.1 Poplatky zdarma</h3>
              <p>
                Nebudete muset platit poplatek za přístup k vašim osobním údajům (nebo za uplatnění jakýchkoli dalších práv). 
                Můžeme však účtovat přiměřený poplatek, pokud je vaše žádost jasně neopodstatněná, opakující se nebo nepřiměřená. 
                Alternativně můžeme za těchto okolností odmítnout vyhovět vaší žádosti.
              </p>

              <h3>10.2 Co můžeme od vás požadovat</h3>
              <p>
                Možná budeme potřebovat požádat vás o konkrétní informace, které nám pomohou potvrdit vaši identitu a zajistit 
                vaše právo na přístup k vašim osobním údajům (nebo na uplatnění jakýchkoli vašich dalších práv). Toto je 
                bezpečnostní opatření, které zajišťuje, že osobní údaje nejsou zveřejněny žádné osobě, která na ně nemá právo. 
                Můžeme vás také kontaktovat a požádat o další informace v souvislosti s vaší žádostí, abychom urychlili naši odpověď.
              </p>

              <h3>10.3 Časový limit pro odpověď</h3>
              <p>
                Snažíme se reagovat na všechny legitimní žádosti do jednoho měsíce. Příležitostně to může trvat déle než měsíc, 
                pokud je vaše žádost obzvláště složitá nebo jste podali řadu žádostí. V takovém případě vás budeme informovat a 
                průběžně vás informovat.
              </p>

              <h2>11. Změny zásad ochrany osobních údajů</h2>
              <p>
                Naše zásady ochrany osobních údajů můžeme čas od času aktualizovat. Jakékoli změny těchto zásad ochrany osobních 
                údajů budou zveřejněny na našich webových stránkách. 
              </p>
              <p>
                Tato verze byla naposledy aktualizována v datu uvedeném v horní části této stránky.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 