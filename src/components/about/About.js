import { ParallaxBanner } from 'react-scroll-parallax';
import './about.css'
import { Link } from 'react-router-dom'



const About = () => {
  return (
<section>
      <div className="about-container">
        <h2 className="main-title">Hello, my name is John Shellabarger.</h2>


        <ParallaxBanner
            className="parallax-banner"
            layers={[
                {
                    image: 'https://lh3.googleusercontent.com/1mw1h5mZI_xhUABcT2PZzde7NU6WX3_BmExnOGpERMA_IpBygfndc85wyF3TdhuYEE6p0uuipkcvTFgViVgcgNbCEEK1qekZ8TmK5Eg9dHKBKPbGp7-hdggIYs_ot4SVOAtwhEivNrU78ZNe4QVsst2CszsFmGV1sDV34cDZTe74bUQh5DRWMa_tq82_HlFosSD5KQx3njrovNoDaNOKg5k57yPnRJqzWJjLZjlooNG4JC-WR73SNs3TzuO1monya8_xmOupvGsHi5ymHHsftSKYrVtetHKXPR945Z3e3vLwj_VI8OdhK4JueyeE46LcAOkv5QIYzf-omUkveNTivVRrMkgiY_n1zw5mcBabnmIoJ5GC4Ks010X0Jd4HpLuFJl4AO5TmAtYoYK6FooGfRJh-2-QnzJ9eo-LxJNwuVmsA6Xoj95pzXEdNwk0YSiR9FOvqSAQTUeuPCda5wCIjBI9AOlMGOPauUoXkbgIK0P_Dw4fKa8Gon_WI-zoKkr9Mej2pOCgM38n-RhPZamlFcraGWTYke1GSYuAdAt8Bz4ZHwm9WHOuzoyua8aR__VJQ1CHa1g_FswhjOUC5WyWXRrPsXb3dRLZnZCr9iC7j0GKpE6r9ZtfRylKGnP4NdkmFStu3pBt2pJGptlpSvzD9QfLiWqEOejbIjTDlFjfPYeQdBQ3VH8vDpYbOU99-NfugjbkJC2OD2nVAxdUCcbFYPA=w1920-h1250-no?authuser=0',
                    amount: 0.1,
                },
                {
                    image: 'https://lh3.googleusercontent.com/rzj3mk2B0FB1ZCO-p9NNDX6JbHkc-lVyZt8_gLcGSei74-FG9ErE6z9sSB2WqJhp_t0_A0icOERCdedoGdAD8nMLJTiWUWuIAMQdO2DxrYJAp1GNj6nx2yre_QWYZJXgthdUruucFm8oQySohzNH7XLwlbKkseAMovNgQcLeHiVaURou46Kv3gRIEwQjXyfGK-PI6r9YFqk_4PK7H7SVjkcOfcuPUuGtq5Ll8ekZ1hWOBJr-0bjrMkvkT294yt5QsUKVTVYTmLzg_Dkde5x1vCSOmceMS7cbdWQay-trNqkZFFPts6mf4KLLQT9pDAb1WfuMKcfTGGwooLrs8OOI5ItRrisfxh0TXax3DlXwN8oQdEluqj-z8Ujb-qRqi2aJ5ve2srfv4JBvX9CjscYODZKZ2L7lZ57VCxyAaPMg9DmqXjZhukyuaFHhcgUi1gVhKlLbkhy-2nt2SwypS1WjqFX665sbV7m3JRit6TyTIfsB6fidtUNwYNjyA6AMgT28Y_LYbPp9vbL79sXSpCZsCOB0FrWxZ8vWOgjlcUXu46T-eQvYVGRhIj9CjlogxeWhLE3Mz29ojU6mLc-63kwEdebwdBvXylwZ7NwKRI6Xbeq3ref_ICJ9VDL5i45cGKj8vI0Jv18s5jwYxtMmt1Or9HRKHhSgOVBKSLCQqv-sYN-PESJtQVxgtKQjIxkWjx9uN4kelfxI6adYob40K_ksLA=w1748-h1250-no?authuser=0',
                    amount: 0.4,
                },
                {
                  image: 'https://lh3.googleusercontent.com/SteMgwUeJEhUlZJRVfK2txqk-SGKFMfat4HQKslCR_-ztAZNs-lTbqpWl_ka4BTfTDIfwDyET_1cpc7K1WSPK-OUc6J4Clh3m_dRp2NwOXAsFPIk9zPEHlGwYUkEXe69GKflX6dXh4vptT-ckIZUlj51-DTy_JM9u-FN_LuSDpviqS9-TIJzCg2s_X4Xent1sWIPQd5_X6ydMzUm2CkuBBRWcFE4vQ61jrpTBMs2O_8j0tLlFzb7H8ceBIadpPSvggTWJGd8XOWzKm38z6_p69dCmkZDNJRubrL_0yuBgV6QYYFlS92ez_dNPrVpxYEXCwzN0w6FxbCPqWb2sNvZGHpobnKoQ5Tuc3Jnj2uoVSeXvSSku9vw4DoBdUfZkuQQYcBot48kHI4wiByTPRunu0yck-LjGjBgUrz4iBd9PGN7QGzT54At7YcMZQ5eI7t8l2AHoowVukDrvcNfMPkRPTAlSJHF8PUplPwf21uzxWD_2y46bYN7jjIqfTka1gVRpdXpJH1Quy3kHwKfFiGy-nRTWlxjmOH0uaPe9JDr-LRNGij4wCe7M6KuLwPocFSRgJ6YLYsg_hvBoTwZUZKZknXDjHM1X3IIvbLSKXquSbEKCVJWr6-rwPI81HpeYCE70cVX1Nj2WI8bZ7sn9b2b7eglAKpbotWLeiaaEaxRSmQFABeqWUQrxHwJsVn1BsOQUiKVURNX7o6O0n5R3Bp1RA=w1920-h1225-no?authuser=0',
                  amount: 0.8,
                }
            ]}
            style={{
                height: '90vh',
            }}
        >
        </ParallaxBanner>


        <h1 className='about-header'>
          I am a Full-stack Software Engineer and Designer from Devner, Colorado.
        </h1>
          
        <div className='btn-wrapper'>
          <Link className='contact-btn' to='/contact'>CONTACT ME</Link>
        </div>

      </div>
    </section>
  )
}

export default About
