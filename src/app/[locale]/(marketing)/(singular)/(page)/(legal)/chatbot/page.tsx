import SectionHeader from "@/components/section-header";

interface ChatBotPageProps {}

export default function ChatBotPage({}: ChatBotPageProps) {
  return (
    <div>
      <SectionHeader title="Terms & Conditions: ChatBot" level={1} />
      <p>
        These terms apply to the use of the&nbsp;
        <a href="@/app/[locale]/(routes)/(singular)/(page)/(legal)/chatbot/page">
          Raiz Chatbot
        </a>
        &nbsp;(Ashlee).
      </p>

      <p>
        These terms, together with the&nbsp;
        <a href="@/app/[locale]/(routes)/(singular)/(page)/(legal)/chatbot/page">
          Raiz Terms of Use
        </a>
        &nbsp;and&nbsp;
        <a href="@/app/[locale]/(routes)/(singular)/(page)/(legal)/chatbot/page">
          Privacy Policy
        </a>
        , form a binding agreement between you and Raiz Invest Australia (ACN
        604 402 815) (Raiz), and these terms will prevail in relation to your
        use of the Raiz Chatbot.
      </p>

      <p>If you do not agree with these terms, you must not use the Chatbot.</p>

      <ol>
        <li>
          In order to use the Chatbot, you must have an active and eligible Raiz
          Investment Account.
        </li>
        <li>
          The Chatbot relies on transaction data provided by your financial
          institutions to generate insights on your spending and funds flow. The
          responses provided by the Chatbot are not intended to be financial,
          accounting or other professional advice. While Raiz uses reasonable
          endeavours to present accurate information, it cannot guarantee the
          accuracy of the third party information or the Chatbot responses.
        </li>
        <li>
          If you ask the Chatbot a general question, the responses provided will
          be general information that has been prepared without taking account
          of your objectives, financial situation or needs. Before acting on
          that information, you should consider the appropriateness of the
          information in view of your own objectives, financial situation and
          needs.
        </li>
        <li>
          If you ask the Chatbot a specific question regarding your own account,
          the responses provided will provide you with current account
          information or, depending on the question you ask, information based
          on cashflow forecasting drawn from your last three months of spending
          and income data. These responses provide guidance only, based on the
          information made available by third parties. Before acting on the
          information provided by the Raiz chatbot, you should consider the
          appropriateness of the information in view of your own objectives,
          financial situation and needs.
        </li>
        <li>
          Communications from the Chatbot (and any associated materials) do not
          constitute financial product advice. Please consider obtaining
          independent advice before you make any financial decisions.
        </li>
        <li>
          Neither Raiz nor any of its affiliated companies, agents or
          subcontractors shall be liable for any direct, indirect, special,
          incidental, consequential, punitive, or exemplary damages, including
          lost profits arising in any way from, including but not limited to:
          (i) use of the Chatbot, or information provided by the Chatbot; (ii)
          the accuracy, timeliness or completeness of the information provided
          through the Chatbot or any errors or omissions in the responses
          provided by the Chatbot; or (iii) claims of third parties in
          connection with use of the Chatbot.
        </li>
        <li>
          Certain legislation including the Australian Consumer Law, may imply
          warranties or conditions or impose obligations, remedies or guarantees
          which cannot be excluded, restricted or modified except to a limited
          extent. Such legislation may, for example, impose non-excludable
          guarantees that goods are of acceptable quality or that services will
          be rendered with due care and skill (with certain remedies available
          to consumers for certain breaches of such guarantees). To the extent
          that such legislation applies, this Agreement must be read subject to
          those statutory provisions. If those statutory provisions apply,
          notwithstanding any other provision of this Agreement, to the extent
          that Raiz is entitled to do so, Raiz limits its liability pursuant to
          such provisions for any goods to the replacement, repair or refund of
          the cost of goods, or for services, to the re-supply or the payment of
          the cost of having the services supplied again.
        </li>
        <li>
          You agree to fully compensate Raiz and its officers, employees and
          agents from and against reasonable liability, loss, damage, costs and
          expense (including, without limitation, reasonable legal expenses on a
          reasonable basis) and penalties incurred or suffered by any of them
          arising out of (i) your material breach of this Agreement; (ii) any
          misuse or use of the Chatbot or information provided by the Chatbot;
          and (iii) any act of fraud or wilful misconduct by or on behalf of
          you.
        </li>
        <li>
          You must maintain the security of your password, and notify Raiz
          immediately if there is any unauthorised use of your account or other
          breach of security.
        </li>
        <li>
          Raiz retains all intellectual property rights in the Chatbot and the
          responses provided by the Chatbot.
        </li>
        <li>
          The Chatbot is provided on “as is” and on an “as available” basis,
          without any representation or endorsement made and without warranty or
          guarantee of any kind (whether express or implied). You may at times
          experience disruption or other difficulties in using the Chatbot. You
          should consider the potential for disruption or other difficulties in
          planning your use of the Chatbot.
        </li>
        <li>
          If you breach the terms of this Agreement, Raiz may (at its option,
          and without limiting the remedies available to Raiz in any way)
          terminate its agreement with you or bar you from accessing the Website
          or App on a temporary or permanent basis.
        </li>
        <li>
          Raiz reserves the right to modify, discontinue or disable the Chatbot
          or any part of the Chatbot (on a permanent or temporary basis) at any
          time. While Raiz will, where reasonably practicable and possible,
          endeavour to provide you with prior notice of such modifications,
          discontinuations or disabling, you agree and accept that it may not
          always be possible to provide you with such prior notification.
        </li>
        <li>
          The Chatbot may use third party software and corresponding privacy
          policies and terms of use will apply.
        </li>
      </ol>

      <p>
        <br />
        Raiz may, from time to time, amend this Agreement. Any such amendments
        will be posted on the Website and will take effect at least fourteen
        (14) days after such posting. If you do not accept such amendments to
        the Agreement, you cannot continue to use the Chatbot. By using the
        Chatbot, you agree that the then-current version of these Terms
        (including any amendments effective at that time) applies to your use of
        the Chatbot.
      </p>
    </div>
  );
}
