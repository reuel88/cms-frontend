import SiteContainer from "@/components/site-container";
import SectionHeader from "@/components/section-header";

interface RegistrationGuidePageProps {}

export default function RegistrationGuidePage({}: RegistrationGuidePageProps) {
  return (
    <main>
      <SiteContainer>
        <SectionHeader
          title="Registration Guide"
          level={1}
          className="text-center"
        >
          <div className="flex flex-col space-y-4">
            <p>
              This guide will walk you through the Raiz registration process.
              This helps to verify and secure your information and allows Raiz
              to recommend an appropriate portfolio for you. Bank-level
              standards of security help ensure that your information is
              protected.
            </p>

            <p>
              After downloading the app, grab your online banking credentials.
              From there, it’s a simple, three-step signup process.
            </p>
          </div>
        </SectionHeader>
      </SiteContainer>
      <SiteContainer>
        <div className="prose mx-auto">
          <h2>1. Link your credit or debit cards for round-ups</h2>

          <figure className="wp-block-image size-full">
            <img
              width="1890"
              height="592"
              src="https://raizinvest.com.au/wp-content/uploads/2022/05/registration_guide_1_raiz.png"
              alt=""
              className="wp-image-11601"
            />
          </figure>

          <p>
            Raiz monitors your credit and debit card activity for round-up
            opportunities. Round-ups are like a digital version of spare change.
            Raiz can invest this spare change automatically, or you can approve
            the round-up of each card transaction manually. We recommend the
            default automatic round-ups setting to invest the change every time
            you spend.
          </p>

          <p>
            Our current app allows certain banks (Commonwealth Bank, Westpac,
            NAB, ANZ, St. George, Bank of Queensland) to connect as Spending
            Accounts for round-ups and funding sources simultaneously by simply
            entering your bank login credentials. This is an easy one step
            process that allows you to start investing in minutes!
          </p>

          <p>
            If you wish to connect one of these banks (Commonwealth Bank,
            Westpac, NAB, ANZ, St. George, Bank of Queensland) as a Spending
            Account to be monitored for round-ups:
          </p>

          <ul className="marker-list">
            <li>Select your bank from the list for easy signup.</li>
            <li>
              Link your credit or debit card by entering your online bank login
              credentials. Enter the same login credentials you would use to
              access your online banking website.*
            </li>
            <li>
              <em>
                Please Note: You may be required to confirm a security code or
                security questions in order to connect your bank account. The
                security code would be texted by your bank to the cell phone
                number associated with your bank account. Not all banks require
                this step.
              </em>
            </li>
            <li>
              Select all accounts that you would like to track for round-ups.
            </li>
          </ul>

          <p>
            To Link a credit or debit card** issued by a bank not listed above,
            using your online banking login credentials:
          </p>

          <ul className="marker-list">
            <li>
              Select your bank from the list for easy signup, or click “More”
              and search for your bank.
            </li>
            <li>
              Enter the same login credentials you would use to access your
              online banking.*
            </li>
            <li>
              If needed, answer one of your security questions for your bank
              account, or enter your bank PIN code. Not all banks require this.
            </li>
            <li>
              Select all accounts that you would like to track for round-ups.
            </li>
          </ul>

          <p>
            If you do not see your account provider on the list, please let us
            know by emailing support@raizinvest.com.au and sending us the bank’s
            information. If you are not interested in round-ups, you can skip
            this step. We won’t be able to collect round-ups for you, but you
            can still invest any amount at any time.
          </p>

          <p>
            Additionally, there’s a feature that allows you to set up recurring
            deposits from your funding account to your Raiz account. If
            interested in the feature, go to “Deposit/Withdraw” from the Home
            page, select “Recurring” at the top, and enter the amount you’d like
            to be transferred from your funding account to your Raiz account on
            a daily, weekly, or monthly basis.
            <br />
            <em>* These cards will not be used as the funding source.</em>
            <br />
            <em>
              ** We use bank-level security to keep your information safe.
            </em>
          </p>

          <h2>2. Connect a funding account</h2>

          <figure className="wp-block-image size-full">
            <img
              loading="lazy"
              width="1890"
              height="592"
              src="https://raizinvest.com.au/wp-content/uploads/2022/05/registration_guide_2_raiz.png"
              alt=""
              className="wp-image-11608"
            />
          </figure>

          <p>
            A funding source is a bank account which funds your Raiz account
            directly. Whenever the round-ups threshold ($5) is met or exceeded;
            lump sums are invested; or recurring deposits are established, this
            funding source is debited a corresponding dollar amount.
          </p>

          <p>
            The latest app update features new ways to link your funding
            account. When you connected your round-ups account, you may have
            been able to establish your funding account with that bank as your
            funding source as well – all in one easy process. Select “Use (Your
            Bank Name)” if you would like to use your funding account from the
            same bank as the one you used for your round-ups.
          </p>

          <p>
            If you would like to use a different bank, or one not on that list
            of 6 major banks, select “Use a Different Bank” and input your
            funding account and BSB numbers.
          </p>

          <p>
            You can find your specific bank branch’s 6 digit BSB by logging into
            your online banking, by performing a quick Google search, or by
            looking at any bank statements.
          </p>

          <p>Now your funding source should be set up successfully.</p>

          <h2>3. Tell us about yourself</h2>

          <figure className="wp-block-image size-full">
            <img
              loading="lazy"
              width="1890"
              height="592"
              src="https://raizinvest.com.au/wp-content/uploads/2022/05/registration_guide_3.jpeg"
              alt=""
              className="wp-image-11609"
            />
          </figure>

          <p>
            The final step in registration is to tell us about yourself. Raiz is
            required by law to collect and verify personal information related
            to your identity.
          </p>

          <p>
            The first set of fields asks for your legal name, phone number, date
            of birth, and a security question. The following page will ask you
            to enter your permanent residential address.The next page asks you
            to confirm the following; Any information you enter into the app is
            true, accurate, current, and complete; that your funding account is
            not a credit card, overdraft amount or any other borrowed money;
            that you acknowledge that Raiz will undertake, in good faith, to
            generate and place the orders for ETF units; that you have received
            and read the product disclosure statement.
          </p>

          <p>
            The next set of fields covers your financial standing, including
            your employment status, net worth, income, investment goals, and
            time horizon. This information is part of the Raiz calculator which
            feeds into the next page.
          </p>

          <p>
            Raiz encrypts and protects all customer data with bank-level
            security.
          </p>

          <p>
            After you submit this information, Raiz will display an example Raiz
            portfolio. These portfolios range from conservative to aggressive,
            and correspond to different levels of risk and expected return. You
            can select a different portfolio at any time.
          </p>

          <p>
            After choosing a portfolio, select “Confirm Portfolio” at the bottom
            of the screen. Next, you will choose your initial investment to
            start your Raiz account.
          </p>

          <p>
            <strong>Net worth:</strong>&nbsp;The total value of all assets,
            including cash owned, real estate owned, and total value of
            investments, minus debts.
          </p>

          <p>
            <strong>Income:</strong>&nbsp;How much you earn each year.
          </p>

          <p>
            <strong>Investment goals:</strong>&nbsp;The item or lifestyle choice
            on which you plan to spend money accumulated from your investments.
          </p>

          <p>
            <strong>Time horizon:</strong>&nbsp;The earliest time you may need
            to access a significant portion of your investment funds.
          </p>

          <h2>Troubleshooting your account</h2>

          <p>
            <br />
            Sometimes issues arise when signing up for your Raiz account:
            perhaps information was not entered correctly or your bank login
            password changed. In these instances, a red triangle with an error
            message will appear on the home screen. Please tap this notification
            to address the problem. You can also visit the Settings &gt;
            Accounts screen to manually update, link, or unlink round-up and
            funding accounts.
          </p>

          <p>
            Please note: certain circumstances may require you to submit
            additional documentation in order to complete the account approval
            process. If you receive an error message which directs you to
            confirm your personal profile information, or to submit identity
            verification documents for review, this means that we were unable to
            verify your identity with the information provided. Please submit
            the required information and/or documents as requested, and we will
            approve your application as soon as possible.
          </p>

          <p>
            If you need assistance, you may email us at&nbsp;
            <a href="mailto:support@raizinvest.com.au">
              support@raizinvest.com.au
            </a>
            &nbsp;or call us at&nbsp;<a href="tel:1300754748">1300 75 47 48</a>
          </p>
        </div>
      </SiteContainer>
    </main>
  );
}
