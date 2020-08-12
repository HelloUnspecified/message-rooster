<script>
  import SvelteSEO from 'svelte-seo';
  import Header from './components/Header.svelte';
  import HomeAbout from './components/HomeAbout.svelte';
  import HomeWhy from './components/HomeWhy.svelte';
  import Footer from './components/Footer.svelte';
  let name = 'world';
</script>

<svelte:head>
  <SvelteSEO
    title="Message Rooster"
    description="Platform to conenct you directy to your customers anytime!"
    url="http://messagerooster.com"
  />
</svelte:head>

<div class="flex flex-column vh-100">
  <header>
    <Header />
  </header>
  <div class="flex-grow">
    <HomeAbout />
    <HomeWhy />
  </div>
  <Footer />
</div>
