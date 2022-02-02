import Layout from '@/components/Layout';
import React from 'react';

export default function ThankYouPage() {
  return (
    <Layout>
      <div className="container py-24">
        <div className="prose">
          <h2 className="text-primary text-3xl font-extrabold tracking-tight sm:text-4xl">
            Membership Enquiry
          </h2>
          <p className="lead">
            You&apos;re on your way to becoming a member of Renegade.
          </p>
          <p>
            We will be in contact with you when memberships become available.
            Please be patient as applications are processed on a first-come
            first-served basis and there are limited memberships available
            throughout the year.
          </p>
          <p>
            Your next step in progressing your application after hearing from us
            will be booking in your first class. You will get to meet the
            coaches, set your priorities and experience some pretty awesome
            training.
          </p>
          <p>
            All classes are coordinated by black belt instructors with years of
            experience training beginners through to pro fighters. You&apos;ll
            learn from world-championship medallists and professional MMA
            fighters. You&apos;ll find that they&apos;re pretty good people too.
          </p>
        </div>
      </div>
    </Layout>
  );
}
