import SectionHeader from "@/components/section-header";

interface DisclosuresPageProps {}

export default function DisclosuresPage({}: DisclosuresPageProps) {
  return (
    <div>
      <SectionHeader
        title="Disclosures"
        subTitle="Updated 10 January 2023"
        level={1}
      />
      <p>
        The information on this website/app/email has been prepared by Raiz
        Invest Australia Limited ACN 604 402 815 (Raiz), Authorised
        Representative of AFSL 434776.
      </p>

      <p>
        The RAIZ Invest Australia Limited Fund (Raiz Fund) is issued by Instreet
        Investment Limited ACN 128 813 016. The Raiz Fund product disclosure
        statements is dated 6th December 2022 (PDS). The PDS is available at the
        website&nbsp;
        <a
          href="https://raizinvest.com.au/product-disclosure-statement/"
          target="_blank"
          rel="noreferrer noopener"
        >
          www.raizinvest.com.au
        </a>
        . In deciding whether to acquire or continue to hold and investment
        investors must obtain the PDS and carefully consider its contents.
      </p>

      <p>
        The information contained in this website/app/email is general
        information only. It has been prepared without taking account any
        potential investors’ financial situation, objectives or needs and the
        appropriateness of this information needs to be considered in that
        context. Investors must form their own views on whether the Raiz Fund is
        appropriate after considering their objectives, financial situation and
        needs. We recommend you seek your own legal, financial and taxation
        advice. The information contained in this website/app/email may be based
        on assumptions or market conditions and may change without notice. This
        may impact the accuracy of the information. Actual results may vary and
        any variation may be materially positive or negative.
      </p>

      <p>
        No responsibility or liability is accepted by Raiz, Instreet or any
        third party who has contributed to this website/app/email for any of the
        information contained herein or for any action taken by you or any of
        your officers, employees, agents or associates.
      </p>

      <p>Past performance is not a reliable indicator of future performance.</p>

      <h3>
        <strong>Calculator Disclosure</strong>
      </h3>

      <p>
        The projected values shown are hypothetical in nature and should not be
        relied on. They may be affected by inaccurate assumptions or risks and
        uncertainties and will differ materially from results ultimately
        achieved. In order to calculate the expected return for each asset
        class, the investment team first researched the historical total returns
        of the index or similar asset class underlying the ETFs (fee and
        currency adjusted).
      </p>

      <p>
        For the IVV, IEU, 30 years of historical data was used to calculate the
        return. For the STW 20 years of historical data was used for the IAA,
        IAF, RCB 10 years of historic information was used. An interest rate of
        2.5% and inflation rate of 2% were assumed. All returns are deflated for
        inflation. Factors that can cause significant variation from the
        historic risks are outlined in the product disclosure statement.
      </p>

      <p>
        The white centre line on the charts is the most likely outcome based on
        the data. The shaded envelope around the centre line is the risk
        envelopes to a 95% confidence interval, based on the historical data and
        illustrates the risks in a graphical format of achieving an expected
        portfolio value.
      </p>
    </div>
  );
}
