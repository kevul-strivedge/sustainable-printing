import PageHeader from "../ui/PageHeader";

export default function SustainabilityPage() {
  return (
    <>
      {/* Hero banner */}
      <PageHeader
        title="Why We use Environmentally Friendly Printing with Sustainable Printing Solutions"
        titleClassName="text-3xl max-w-6xl"
      />

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 lg:px-10 sm:py-16 py-8 space-y-12">
        {/* Intro */}
        <div className="space-y-4 pt-3">
          <p className="text-[#292560] text-base leading-6">
            Sustainability is more than just a buzzword for us. We see it as a
            responsibility and the foundation on which we, as a business, need
            to be conscience of moving forward to maintain the world we want for
            our children to live in. A world like we had growing up, where the
            weather was stable, dependable and enjoyable. A world where the
            environment is protected and our engagement with it ensures that
            resources are protected, properly managed and not exploited. A world
            where we are able to educate our customers on making proper choices
            and letting them know how their consumer behaviour can contribute to
            a circular economy and a better world.
          </p>
          <p className="text-[#292560] text-base leading-6">
            As individuals, to maintain our quality of life and as businesses to
            prosper responsibly, we must embrace the notion of being
            sustainable. If we do not change our mindsets and behaviour, at some
            stage, we will run out of fossil fuels, animals will continue to
            become extinct, we will run out of trees and we will damage our
            atmosphere for generations to come.
          </p>
          <p className="text-[#292560] text-base leading-6">
            The basis for this required change lies in understanding and
            striving to be sustainable. In our businesses, at home, in our
            communities and around the world.
          </p>
        </div>

        {/* Reduce, Reuse & Recycle */}
        <div className="space-y-4 pt-6">
          <h3 className="text-[#292560] text-2xl font-semibold">
            Reduce, Reuse & Recycle
          </h3>
          <p className="text-[#292560] text-base leading-6">
            There are so many ways we can reduce the waste we produce. In our
            case, we reduce the amount of resources we use by investing in
            state-of-the-art technology. Our new offset printing presses have
            seen a reduction in 90% of start-up paper wastage (paper used to get
            the colours on your job spot on). This is a big deal and a huge
            reduction in paper waste. Our plate manufacturing machines are
            chemical free. Our digital printing options also reduce the amount
            of paper & biodegradable toner needed by printing only the amounts
            of paper required for each job.
          </p>
          <p className="text-[#292560] text-base leading-6">
            Our commitment to using GreenPower and 100% post-consumer waste
            recycled papers has a multitude of positive flow on effects. The
            need for virgin fibres in paper production is greatly reduced. Even
            if the fibres are sourced from properly FSC managed plantation
            forests, our usage of recycled papers does not demand them for their
            production the same as virgin papers would required. This then has a
            flow on effect in the reduction of water usage in production
            processes, a reduction in chemical usage, reduction in fossil fuel
            usage, reduction in landfill pressure....it goes on and on.
          </p>
          <p className="text-[#292560] text-base leading-6">
            As a printing business we do generate paper waste. We work hard to
            minimise this, but in our business its unavoidable to totally
            eliminate it. So, we carefully plan our jobs to firstly minimise
            off-cuts and then recycled all our paper off-cuts on a bi-weekly
            basis. We also recycled 100% of our printing plates.
          </p>
        </div>

        {/* Share The Love */}
        <div className="space-y-4 pt-6">
          <h3 className="text-[#292560] text-2xl font-bold">Share The Love</h3>
          <p className="text-[#292560] text-base leading-6">
            We work efficiently and sustainably by working collectively with our
            customers. We identify like-minded customers who have similar print
            requirements and we help them by producing their jobs together on
            the same printing presses. This in turn reduces wastage and has
            positive implications for our customers – more cost effective and
            faster turnaround printing. It&apos;s a win-win for you and the
            environment.
          </p>
          <p className="text-[#292560] text-base leading-6">
            We attract positive minded individually, businesses, schools,
            Government bodies and charities. This is why <strong>YOU</strong>{" "}
            are here, now, reading this. You want to make a positive change and
            we want to help you do it.
          </p>
        </div>
      </div>
    </>
  );
}
