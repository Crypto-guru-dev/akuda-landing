import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const cryptoLinks = [
    {
      id: "1",
      link: "https://www.tradingview-widget.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22BINANCE%3ABTCUSDT%22%2C%22width%22%3A400%2C%22height%22%3A220%2C%22dateRange%22%3A%221D%22%2C%22colorTheme%22%3A%22dark%22%2C%22trendLineColor%22%3A%22rgba(105%2C%20255%2C%20191%2C%201)%22%2C%22underLineColor%22%3A%22rgba(0%2C%20255%2C%200%2C%200.3)%22%2C%22underLineBottomColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22isTransparent%22%3Afalse%2C%22autosize%22%3Afalse%2C%22largeChartUrl%22%3A%22%22%2C%22utm_source%22%3A%22dpex.io%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22dpex.io%2F%22%7D",
    },
    {
      id: "2",
      link: "https://www.tradingview-widget.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22BINANCE%3AETHUSD%22%2C%22width%22%3A400%2C%22height%22%3A220%2C%22dateRange%22%3A%221D%22%2C%22colorTheme%22%3A%22dark%22%2C%22trendLineColor%22%3A%22rgba(105%2C%20255%2C%20191%2C%201)%22%2C%22underLineColor%22%3A%22rgba(0%2C%20255%2C%200%2C%200.3)%22%2C%22underLineBottomColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22isTransparent%22%3Afalse%2C%22autosize%22%3Afalse%2C%22largeChartUrl%22%3A%22%22%2C%22utm_source%22%3A%22dpex.io%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22dpex.io%2F%22%7D",
    },
    {
      id: "3",
      link: "https://www.tradingview-widget.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22BINANCE%3AMATICUSDT%22%2C%22width%22%3A400%2C%22height%22%3A220%2C%22dateRange%22%3A%221D%22%2C%22colorTheme%22%3A%22dark%22%2C%22trendLineColor%22%3A%22rgba(105%2C%20255%2C%20191%2C%201)%22%2C%22underLineColor%22%3A%22rgba(0%2C%20255%2C%200%2C%200.3)%22%2C%22underLineBottomColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22isTransparent%22%3Afalse%2C%22autosize%22%3Afalse%2C%22largeChartUrl%22%3A%22%22%2C%22utm_source%22%3A%22dpex.io%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22dpex.io%2F%22%7D",
    },
    {
      id: "4",
      link: "https://www.tradingview-widget.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22BINANCE%3ALINKUSDT%22%2C%22width%22%3A400%2C%22height%22%3A220%2C%22dateRange%22%3A%221D%22%2C%22colorTheme%22%3A%22dark%22%2C%22trendLineColor%22%3A%22rgba(105%2C%20255%2C%20191%2C%201)%22%2C%22underLineColor%22%3A%22rgba(0%2C%20255%2C%200%2C%200.3)%22%2C%22underLineBottomColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22isTransparent%22%3Afalse%2C%22autosize%22%3Afalse%2C%22largeChartUrl%22%3A%22%22%2C%22utm_source%22%3A%22dpex.io%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22dpex.io%2F%22%7D",
    },
  ];

const MobileOpportunitySlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoPlay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
  };
  return (
    <Slider className="relative  w-full " {...settings}>
      {cryptoLinks.map((item, index) => {
        return (
          <div key={item.id} className="px-2">
            <div key={item.id} className="rounded-2xl overflow-hidden ">
              <div
                className="tradingview-widget-container "
                style={{
                  height: "220px",
                }}
              >
                <iframe
                  allowTransparency={true}
                  src={item.link}
                  title="mini symbol-overview TradingView widget"
                  lang="en"
                  className="size-full block pointer-events-none"
                ></iframe>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default MobileOpportunitySlider;