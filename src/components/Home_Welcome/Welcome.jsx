import './Welcome.css';
import { motion } from 'framer-motion';

function Welcome() {
  return (
    <motion.div
      animate={{
        opacity: [1, 0, 0],
        transitionEnd: {
          display: 'none',
        },
      }}
      transition={{ delay: 3.5, duration: 1, times: [0, 0.9, 1] }}
      // exit={{ display: 'none' }}
      id="welcome"
    >
      <svg
        id="Jerrick"
        width="50%"
        height="50%"
        viewBox="0 0 738 129"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M64.48 13.48V95.88C64.48 105.053 61.6533 112.413 56 117.96C50.3467 123.4 42.88 126.12 33.6 126.12C24.2133 126.12 16.6933 123.347 11.04 117.8C5.38666 112.147 2.56 104.467 2.56 94.76H17.12C17.2267 100.2 18.6133 104.627 21.28 108.04C24.0533 111.453 28.16 113.16 33.6 113.16C39.04 113.16 43.0933 111.56 45.76 108.36C48.4267 105.053 49.76 100.893 49.76 95.88V13.48H64.48Z"
          stroke="#F4EEE0"
          strokeWidth="5"
        />
        <path
          d="M173.164 77.8C173.164 80.5733 173.004 83.5067 172.684 86.6H102.604C103.137 95.24 106.07 102.013 111.404 106.92C116.844 111.72 123.404 114.12 131.084 114.12C137.377 114.12 142.604 112.68 146.764 109.8C151.03 106.813 154.017 102.867 155.724 97.96H171.404C169.057 106.387 164.364 113.267 157.324 118.6C150.284 123.827 141.537 126.44 131.084 126.44C122.764 126.44 115.297 124.573 108.684 120.84C102.177 117.107 97.0571 111.827 93.3238 105C89.5904 98.0667 87.7237 90.0667 87.7237 81C87.7237 71.9333 89.5371 63.9867 93.1637 57.16C96.7904 50.3333 101.857 45.1067 108.364 41.48C114.977 37.7467 122.55 35.88 131.084 35.88C139.404 35.88 146.764 37.6933 153.164 41.32C159.564 44.9467 164.47 49.96 167.884 56.36C171.404 62.6533 173.164 69.8 173.164 77.8ZM158.124 74.76C158.124 69.2133 156.897 64.4667 154.444 60.52C151.99 56.4667 148.63 53.4267 144.364 51.4C140.204 49.2667 135.564 48.2 130.444 48.2C123.084 48.2 116.79 50.5467 111.564 55.24C106.444 59.9333 103.51 66.44 102.764 74.76H158.124Z"
          stroke="#F4EEE0"
          strokeWidth="5"
        />
        <path
          d="M206.943 51.56C209.503 46.5467 213.129 42.6533 217.823 39.88C222.623 37.1067 228.436 35.72 235.263 35.72V50.76H231.423C215.103 50.76 206.943 59.6133 206.943 77.32V125H192.383V37.32H206.943V51.56Z"
          stroke="#F4EEE0"
          strokeWidth="5"
        />
        <path
          d="M266.63 51.56C269.19 46.5467 272.817 42.6533 277.51 39.88C282.31 37.1067 288.123 35.72 294.95 35.72V50.76H291.11C274.79 50.76 266.63 59.6133 266.63 77.32V125H252.07V37.32H266.63V51.56Z"
          stroke="#F4EEE0"
          strokeWidth="5"
        />
        <path
          d="M319.277 23.08C316.504 23.08 314.157 22.12 312.237 20.2C310.317 18.28 309.358 15.9333 309.358 13.16C309.358 10.3867 310.317 8.03999 312.237 6.11999C314.157 4.19999 316.504 3.23999 319.277 3.23999C321.944 3.23999 324.184 4.19999 325.997 6.11999C327.917 8.03999 328.878 10.3867 328.878 13.16C328.878 15.9333 327.917 18.28 325.997 20.2C324.184 22.12 321.944 23.08 319.277 23.08ZM326.318 37.32V125H311.758V37.32H326.318Z"
          stroke="#F4EEE0"
          strokeWidth="5"
        />
        <path
          d="M345.693 81C345.693 71.9333 347.506 64.04 351.133 57.32C354.759 50.4933 359.772 45.2133 366.172 41.48C372.679 37.7467 380.093 35.88 388.413 35.88C399.186 35.88 408.039 38.4933 414.973 43.72C422.013 48.9467 426.653 56.2 428.893 65.48H413.212C411.719 60.1467 408.786 55.9333 404.413 52.84C400.146 49.7467 394.813 48.2 388.413 48.2C380.093 48.2 373.373 51.08 368.253 56.84C363.133 62.4933 360.573 70.5467 360.573 81C360.573 91.56 363.133 99.72 368.253 105.48C373.373 111.24 380.093 114.12 388.413 114.12C394.813 114.12 400.146 112.627 404.413 109.64C408.679 106.653 411.612 102.387 413.212 96.84H428.893C426.546 105.8 421.852 113 414.812 118.44C407.772 123.773 398.973 126.44 388.413 126.44C380.093 126.44 372.679 124.573 366.172 120.84C359.772 117.107 354.759 111.827 351.133 105C347.506 98.1733 345.693 90.1733 345.693 81Z"
          stroke="#F4EEE0"
          strokeWidth="5"
        />
        <path
          d="M497.28 125L462.88 86.28V125H448.32V6.59999H462.88V76.2L496.64 37.32H516.96L475.68 81L517.12 125H497.28Z"
          stroke="#F4EEE0"
          strokeWidth="5"
        />
        <path
          d="M587.88 25.32V62.6H628.52V74.6H587.88V113H633.32V125H573.32V13.32H633.32V25.32H587.88Z"
          stroke="#F4EEE0"
          strokeWidth="5"
        />
        <path
          d="M735.351 77.8C735.351 80.5733 735.191 83.5067 734.871 86.6H664.791C665.325 95.24 668.258 102.013 673.591 106.92C679.031 111.72 685.591 114.12 693.271 114.12C699.565 114.12 704.791 112.68 708.951 109.8C713.218 106.813 716.205 102.867 717.911 97.96H733.591C731.245 106.387 726.551 113.267 719.511 118.6C712.471 123.827 703.725 126.44 693.271 126.44C684.951 126.44 677.485 124.573 670.871 120.84C664.365 117.107 659.245 111.827 655.511 105C651.778 98.0667 649.911 90.0667 649.911 81C649.911 71.9333 651.725 63.9867 655.351 57.16C658.978 50.3333 664.045 45.1067 670.551 41.48C677.165 37.7467 684.738 35.88 693.271 35.88C701.591 35.88 708.951 37.6933 715.351 41.32C721.751 44.9467 726.658 49.96 730.071 56.36C733.591 62.6533 735.351 69.8 735.351 77.8ZM720.311 74.76C720.311 69.2133 719.085 64.4667 716.631 60.52C714.178 56.4667 710.818 53.4267 706.551 51.4C702.391 49.2667 697.751 48.2 692.631 48.2C685.271 48.2 678.978 50.5467 673.751 55.24C668.631 59.9333 665.698 66.44 664.951 74.76H720.311Z"
          stroke="#F4EEE0"
          strokeWidth="5"
        />
      </svg>
    </motion.div>
  );
}

export default Welcome;
