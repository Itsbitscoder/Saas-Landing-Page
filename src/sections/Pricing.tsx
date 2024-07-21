"use client"
import CheckIcon from '@/assets/check.svg'
import { twMerge } from 'tailwind-merge'
import { motion } from 'framer-motion';
import { SlowBuffer } from 'buffer';

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">
            Pricing
          </h2>
          <p className="section-desc mt-5">
            Free forever. Upgrade for unlimited tasks, better security, and exclusive features
          </p>
        </div>
        <div className='lg:flex-row lg:items-end lg:justify-center flex flex-col gap-6 items-center mt-10'>
          {pricingTiers.map((tier, index) => (
            <div key={index} className={twMerge('card', tier.inverse === true && 'border-black bg-black text-white/60')}>
              <div className='flex justify-between'>
                <h3 className={twMerge('text-lg font-bold text-black/50', tier.inverse === true && "text-white/60")}>
                  {tier.title}
                </h3>
                {tier.popular === true && (
                  <div className='inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20'>
                    <motion.span
                      animate={{
                        backgroundPositionX: '-100%'
                      }}
                      transition={{
                        duration: 1.3,
                        repeat: Infinity,
                        ease: 'linear',
                        repeatType: 'loop'
                      }}
                      className='bg-[linear-gradient(to_right,#FFD700,#FFD700,#B8860B,#8B4513,#B8860B,#FFD700,#B8860B,#8B4513,#8B4513,#B8860B,#FFD700)] [background-size:200%] text-transparent bg-clip-text font-medium'>
                      Popular
                    </motion.span>
                  </div>
                )}
              </div>
              <div className='flex items-baseline gap-1 mt-[30px]'>
                <span className='text-4xl font-bold tracking-tighter leading-none'>${tier.monthlyPrice}</span>
                <span className='tracking-tight font-bold text-black/50'>/month</span>
              </div>
              <button className={twMerge('btn btn-primary w-full mt-[30px]', tier.inverse === true && 'bg-white text-black')}>
                {tier.buttonText}
              </button>
              <ul className='flex flex-col gap-5 mt-8'>
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className='text-sm flex items-center gap-4'>
                    <CheckIcon className='h-6 w-6' />
                    <span>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
