<script>
  import HeartMessage from './shared/svgs/HeartMessage.svelte';
  import InstantConnection from './shared/svgs/InstantConnection.svelte';
  import Support from './shared/svgs/Support.svelte';
</script>

<div class="bg-black-30 pv4">

  <div class="cf pa2 mh-auto mw8">
    <div class="fl w-50 w-25-m w-30-l pa2">
      <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
        <div class="tc">
          <Support />
          <h3 class="f4">Direct to Customer</h3>
          <hr class="mw3 bb bw1 b--black-10" />
        </div>
        <p class="lh-copy measure center f6 black-70 tc">
          Text messaging is the #1 platofrm of communication for people today.
          It was what your customers watch, read and respond to more than any
          other platform. Bring your business directly to where they are
          reading.
        </p>
      </article>
    </div>
    <div class="fl w-50 w-25-m w-30-l pa2">
      <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
        <div class="tc">
          <InstantConnection />
          <h3 class="f4">Instant Communication</h3>
          <hr class="mw3 bb bw1 b--black-10" />
        </div>
        <p class="lh-copy measure center f6 black-70 tc">
          Instant communication. No waiting for your customers to check their
          socials, reach them in the moment of specials, incentives, and
          announcements.
        </p>
      </article>
    </div>
    <div class="fl w-50 w-25-m w-30-l pa2">
      <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
        <div class="tc">
          <HeartMessage />
          <h3 class="f4">Personal Connection</h3>
          <hr class="mw3 bb bw1 b--black-10" />
        </div>
        <p class="lh-copy measure center f6 black-70 tc">
          Nothing creates more loyalty than personal connections. Message
          Rooster helps you build mechanisms to not only managing your customer
          base but provide you ways to meet and commicate to each of their
          individual needs.
        </p>
      </article>
    </div>
  </div>
</div>
