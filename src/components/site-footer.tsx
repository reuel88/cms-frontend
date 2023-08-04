import { FC } from "react";
import SiteLogo from "@/components/site-logo";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const SiteFooter: FC = () => {
  return (
    <footer className="bg-secondary" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <SiteLogo />
            <p className="text-sm leading-6 text-primary/60">
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-primary/90">
                  Solutions
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-primary/60 hover:text-primary/90"
                    >
                      Marketing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-primary/60 hover:text-primary/90"
                    >
                      Analytics
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-primary/60 hover:text-primary/90"
                    >
                      Commerce
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-primary/60 hover:text-primary/90"
                    >
                      Insights
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-primary/90">
                  Support
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-primary/60 hover:text-primary/90"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-primary/60 hover:text-primary/90"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-primary/60 hover:text-primary/90"
                    >
                      Guides
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-primary/60 hover:text-primary/90"
                    >
                      API Status
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-primary/90">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-primary/60 hover:text-primary/90"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-primary/60 hover:text-primary/90"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-primary/60 hover:text-primary/90"
                    >
                      Jobs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-primary/60 hover:text-primary/90"
                    >
                      Press
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-primary/60 hover:text-primary/90"
                    >
                      Partners
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-primary/90">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-primary/60 hover:text-primary/90"
                    >
                      Claim
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-primary/60 hover:text-primary/90"
                    >
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-primary/60 hover:text-primary/90"
                    >
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 space-y-2 border-t border-primary/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-primary/50">
            Raiz Invest Australia Limited – Authorised Representative of AFSL
            434776. The Raiz Invest Australia Fund and Raiz Property Fund are
            issued in Australia by Instreet Investment Limited (ACN 128 813 016
            AFSL 434776) a subsidiary of Raiz Invest Limited and promoted by
            Raiz Invest Australia Limited (ACN 604 402 815). Product Disclosure
            Statements (PDS) and Target Market Determinations (TMD) for these
            products are available on the Raiz Invest website and App. A person
            should read and consider the PDS and TMD before deciding whether, or
            not, to acquire and continue to hold interests in these products.
            The risks of investing in these products are fully set out in the
            PDS and include the risks that would ordinarily apply to investing.
          </p>

          <p className="text-xs leading-5 text-primary/50">
            Our Raiz Invest account fees can be found{" "}
            <a href="/fees" target="_blank">
              here{" "}
            </a>
            , with detailed explanations and examples in the{" "}
            <a href="/product-disclosure-statement" target="_blank">
              PDS{" "}
            </a>{" "}
            and{" "}
            <a href="/support" target="_blank">
              FAQs
            </a>
            .
          </p>
          <p className="text-xs leading-5 text-primary/50">
            Raiz Invest Super is a Division of AMG Super. The{" "}
            <a href="/super-product-disclosure-statement/" target="_blank">
              PDS
            </a>{" "}
            and{" "}
            <a href="/super-target-market-determination/" target="_blank">
              TMD
            </a>{" "}
            are issued by Equity Trustees Superannuation Limited (AFSL 229757,
            RSE Licence No L0001458) as Trustee of AMG Super. A person should
            consider the information in the PDS and the other important
            information (including the Members Guide) which form part of the
            PDS. The Raiz Invest Super PDS contains all information on our super
            investment options and fees.
          </p>

          <p className="text-xs leading-5 text-primary/50">
            Home loans are subject to approval from the lending institution and
            Raiz Home Ownership makes no warranties as to the success of an
            application until all relevant information has been provided.{" "}
          </p>

          <p className="text-xs leading-5 text-primary/50">
            Raiz Home Ownership Pty Ltd (ABN 14 645 876 937), an Australian
            Credit Representative number 528594 under Australian Credit Licence
            number 387025. Raiz Home Ownership Pty Ltd is 100% owned by Raiz
            Invest Australia Limited (ABN 26 604 402 815).
          </p>

          <p className="text-xs leading-5 text-primary/50">
            Raiz are registered trademarks of Raiz Invest Limited. ©2022 Raiz
            Invest Limited
          </p>

          <p id="asterisk-info" className="text-xs leading-5 text-primary/50">
            ^ Vickovich, A 2022, ‘Micro-investing market doubles as a Robinhood
            trend endures’, Australian Financial Review, 19 May,{" "}
            <a href="https://www.afr.com/companies/financial-services/micro-investing-market-doubles-as-robinhood-trend-endures-20220519-p5amqa">
              https://www.afr.com/companies/financial-services/micro-investing-market-doubles-as-robinhood-trend-endures-20220519-p5amqa
            </a>
          </p>

          <p className="text-xs leading-5 text-primary/50">
            * The Raiz mobile app has achieved an average rating of 4.7 out of 5
            from over 29,000+ app store reviews as of December 2022
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
