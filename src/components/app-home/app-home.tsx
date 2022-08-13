import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})


export class AppHome {

  render() {
    return (
      <div>

        <header id="header">
          <div class="inner">
            <a href="#" class="image avatar"><img src="assets/images/avatar.jpg" alt="" /></a>
            <h1><strong>I am Strata</strong>, a super simple<br />
              responsive site template freebie<br />
              crafted by <a href="http://html5up.net">HTML5 UP</a>.</h1>
          </div>
        </header>

        <div id="main">

          <section id="one">
            <header class="major">
              <h2>Ipsum lorem dolor aliquam ante commodo<br />
                magna sed accumsan arcu neque.</h2>
            </header>
            <p>Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae lobortis tortor primis integer massa adipiscing id nisi accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque cubilia.</p>
            <ul class="actions">
              <li><a href="#" class="button">Learn More</a></li>
            </ul>
          </section>

          <section id="two">
            <h2>Recent Work</h2>
            <div class="row">
              <article class="col-6 col-12-xsmall work-item">
                <a href="assets/images/fulls/01.jpg" class="image fit thumb"><img src="assets/images/thumbs/01.jpg" alt="" /></a>
                <h3>Magna sed consequat tempus</h3>
                <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
              </article>
              <article class="col-6 col-12-xsmall work-item">
                <a href="assets/images/fulls/02.jpg" class="image fit thumb"><img src="assets/images/thumbs/02.jpg" alt="" /></a>
                <h3>Ultricies lacinia interdum</h3>
                <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
              </article>
              <article class="col-6 col-12-xsmall work-item">
                <a href="assets/images/fulls/03.jpg" class="image fit thumb"><img src="assets/images/thumbs/03.jpg" alt="" /></a>
                <h3>Tortor metus commodo</h3>
                <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
              </article>
              <article class="col-6 col-12-xsmall work-item">
                <a href="assets/images/fulls/04.jpg" class="image fit thumb"><img src="assets/images/thumbs/04.jpg" alt="" /></a>
                <h3>Quam neque phasellus</h3>
                <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
              </article>
              <article class="col-6 col-12-xsmall work-item">
                <a href="assets/images/fulls/05.jpg" class="image fit thumb"><img src="assets/images/thumbs/05.jpg" alt="" /></a>
                <h3>Nunc enim commodo aliquet</h3>
                <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
              </article>
              <article class="col-6 col-12-xsmall work-item">
                <a href="assets/images/fulls/06.jpg" class="image fit thumb"><img src="assets/images/thumbs/06.jpg" alt="" /></a>
                <h3>Risus ornare lacinia</h3>
                <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
              </article>
            </div>
            <ul class="actions">
              <li><a href="#" class="button">Full Portfolio</a></li>
            </ul>
          </section>

          <section id="three">
            <h2>Get In Touch</h2>
            <p>Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.</p>
            <div class="row">
              <div class="col-8 col-12-small">
                <form method="post" action="#">
                  <div class="row gtr-uniform gtr-50">
                    <div class="col-6 col-12-xsmall"><input type="text" name="name" id="name" placeholder="Name" /></div>
                    <div class="col-6 col-12-xsmall"><input type="email" name="email" id="email" placeholder="Email" /></div>
                    <div class="col-12"><textarea name="message" id="message" placeholder="Message" ></textarea></div>
                  </div>
                </form>
                <ul class="actions">
                  <li><input type="submit" value="Send Message" /></li>
                </ul>
              </div>
              <div class="col-4 col-12-small">
                <ul class="labeled-icons">
                  <li>
                    <h3 class="icon solid fa-home"><span class="label">Address</span></h3>
                    1234 Somewhere Rd.<br />
                    Nashville, TN 00000<br />
                    United States
                    </li>
                  <li>
                    <h3 class="icon solid fa-mobile-alt"><span class="label">Phone</span></h3>
                    000-000-0000
                    </li>
                  <li>
                    <h3 class="icon solid fa-envelope"><span class="label">Email</span></h3>
                    <a href="#">hello@untitled.tld</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>


        <stencil-route-link url="/profile/stencil">
          <button>Profile page</button>
        </stencil-route-link>
      </div>
    );
  }
}