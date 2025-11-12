
import React from 'react';

interface PersonaIllustrationProps {
  isHighContrast: boolean;
}

const PersonaIllustration: React.FC<PersonaIllustrationProps> = ({ isHighContrast }) => {
  // Colorblind-safe palette
  const defaultColors = {
    bgMain: '#f7f7f7',
    bgElement: '#ffffff',
    grayMedium: '#bbbbbb',
    grayDark: '#555555',
    blue: '#0072B2',
    skyBlue: '#56B4E9',
    green: '#009E73',
    orange: '#E69F00',
    vermillion: '#D55E00',
    purple: '#CC79A7',
    skin: '#E0A487',
    hair: '#222222',
    black: '#000000',
  };

  // High-contrast palette
  const highContrastColors = {
    bgMain: '#555555',
    bgElement: '#1A1A1A',
    grayMedium: '#E5E5E5',
    grayDark: '#FFD700',
    blue: '#33C3FF',
    skyBlue: '#00AFFF',
    green: '#00FF9D',
    orange: '#FFB84D',
    vermillion: '#FF4C4C',
    purple: '#D580FF',
    skin: '#FFB38A',
    hair: '#D4A017',
    black: '#FFFFFF',
    outline: '#FFFFFF',
  };

  const colors = isHighContrast ? highContrastColors : defaultColors;

  const hcBorderStyle = isHighContrast
    ? {
        stroke: highContrastColors.outline,
        strokeWidth: 2,
      }
    : {};


  return (
    <svg
      tabIndex={0}
      viewBox="0 0 702 516"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="illustration-title illustration-desc"
      className={`w-full h-full object-cover bg-transparent transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 ${
        isHighContrast
          ? 'focus:ring-yellow-300 focus:ring-offset-black'
          : 'focus:ring-[#EE6677] ring-offset-[#f7f7f7] dark:focus:ring-offset-[#222222]'
      }`}
    >
      <title id="illustration-title">Illustration of Vishnu, a data analyst with low vision. The oversized computer monitors symbolize his need for screen magnification, and three phone-like objects represent his global connections.</title>
      <desc id="illustration-desc">A detailed illustration portrays Vishnu, a data analyst living with progressive low vision, seated at his workstation. The scene is dominated by three large computer monitors displaying complex data visualizations and charts; their exaggerated size symbolizes the screen magnification Vishnu relies on to do his work. Behind him, three vertical objects represent the three mobile phones he uses to stay connected with his family in India, his multinational colleagues, and his personal life. Vishnu himself is shown focused and competent, dressed in professional attire, conveying a sense of resilience and dedication despite his accessibility challenges.</desc>
      
      {/* ====================================================================== */}
      {/* == CENTER MONITOR                                                   == */}
      {/* ====================================================================== */}
      <mask id="mask0_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="173" y="12" width="335" height="346">
        <path d="M508 12H173V358H508V12Z" fill="white"/>
      </mask>
      <g mask="url(#mask0_4_417)">
        {/* Center Monitor: Main Frame */}
        <path d="M500 12H181C176.582 12 173 15.5817 173 20V350C173 354.418 176.582 358 181 358H500C504.418 358 508 354.418 508 350V20C508 15.5817 504.418 12 500 12Z" fill={colors.bgMain}/>
        
        {/* Center Monitor: Top-Right UI Box */}
        <path d="M484 55H430C425.582 55 422 58.5817 422 63V128C422 132.418 425.582 136 430 136H484C488.418 136 492 132.418 492 128V63C492 58.5817 488.418 55 484 55Z" fill={colors.bgElement} {...hcBorderStyle} />
        <path d="M457 102C465.837 102 473 94.8366 473 86C473 77.1635 465.837 70 457 70C448.163 70 441 77.1635 441 86C441 94.8366 448.163 102 457 102Z" fill={colors.grayMedium}/>
        <path d="M479 106H435C433.343 106 432 107.343 432 109C432 110.657 433.343 112 435 112H479C480.657 112 482 110.657 482 109C482 107.343 480.657 106 479 106Z" fill={colors.grayMedium}/>
        <path d="M471 116H443C441.343 116 440 117.343 440 119C440 120.657 441.343 122 443 122H471C472.657 122 474 120.657 474 119C474 117.343 472.657 116 471 116Z" fill={colors.grayMedium}/>
        
        {/* Center Monitor: Title Bar and Window Controls */}
        <path d="M173 20C173 15.582 176.582 12 181 12H500C504.418 12 508 15.582 508 20V39H173V20Z" fill={colors.grayMedium}/>
        <path d="M186 30C188.209 30 190 28.2091 190 26C190 23.7909 188.209 22 186 22C183.791 22 182 23.7909 182 26C182 28.2091 183.791 30 186 30Z" fill={colors.bgMain}/>
        <path d="M198 30C200.209 30 202 28.2091 202 26C202 23.7909 200.209 22 198 22C195.791 22 194 23.7909 194 26C194 28.2091 195.791 30 198 30Z" fill={colors.bgMain}/>
        <path d="M210 30C212.209 30 214 28.2091 214 26C214 23.7909 212.209 22 210 22C207.791 22 206 23.7909 206 26C206 28.2091 207.791 30 210 30Z" fill={colors.bgMain}/>

        {/* Center Monitor: Right Side Panel with Vertical Bars */}
        <mask id="mask1_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="422" y="144" width="70" height="194">
          <path d="M492 144H422V338H492V144Z" fill="white"/>
        </mask>
        <g mask="url(#mask1_4_417)">
          <path d="M484 144H430C425.582 144 422 147.582 422 152V330C422 334.418 425.582 338 430 338H484C488.418 338 492 334.418 492 330V152C492 147.582 488.418 144 484 144Z" fill={colors.bgElement} {...hcBorderStyle}/>
          <mask id="mask2_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="440" y="162" width="34" height="158">
          <path d="M474 162H440V320H474V162Z" fill="white"/>
          </mask>
          <g mask="url(#mask2_4_417)">
            <path d="M470 162H444C441.791 162 440 163.791 440 166V184C440 186.209 441.791 188 444 188H470C472.209 188 474 186.209 474 184V166C474 163.791 472.209 162 470 162Z" fill={colors.grayMedium}/>
            <path d="M470 196H444C441.791 196 440 197.791 440 200V217C440 219.209 441.791 221 444 221H470C472.209 221 474 219.209 474 217V200C474 197.791 472.209 196 470 196Z" fill={colors.grayDark}/>
            <path d="M470 229H444C441.791 229 440 230.791 440 233V250C440 252.209 441.791 254 444 254H470C472.209 254 474 252.209 474 250V233C474 230.791 472.209 229 470 229Z" fill={colors.grayMedium}/>
            <path d="M470 295H444C441.791 295 440 296.791 440 299V316C440 318.209 441.791 320 444 320H470C472.209 320 474 318.209 474 316V299C474 296.791 472.209 295 470 295Z" fill={colors.grayMedium}/>
            <path d="M470 262H444C441.791 262 440 263.791 440 266V283C440 285.209 441.791 287 444 287H470C472.209 287 474 285.209 474 283V266C474 263.791 472.209 262 470 262Z" fill={colors.grayMedium}/>
          </g>
        </g>
        
        {/* Center Monitor: Main Content Area (List Items) */}
        <mask id="mask3_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="189" y="56" width="225" height="282">
          <path d="M414 56H189V338H414V56Z" fill="white"/>
        </mask>
        <g mask="url(#mask3_4_417)">
          <mask id="mask4_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="189" y="56" width="225" height="47">
            <path d="M414 56H189V103H414V56Z" fill="white"/>
          </mask>
          <g mask="url(#mask4_4_417)">
            <path d="M410 56H193C190.791 56 189 57.7909 189 60V99C189 101.209 190.791 103 193 103H410C412.209 103 414 101.209 414 99V60C414 57.7909 412.209 56 410 56Z" fill={colors.bgElement} {...hcBorderStyle}/>
            <mask id="mask5_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="198" y="70" width="167" height="19">
              <path d="M365 70.1H198V88.9H365V70.1Z" fill="white"/>
            </mask>
            <g mask="url(#mask5_4_417)">
              <path d="M362 70.1H201C199.343 70.1 198 71.4432 198 73.1V74.15C198 75.8069 199.343 77.15 201 77.15H362C363.657 77.15 365 75.8069 365 74.15V73.1C365 71.4432 363.657 70.1 362 70.1Z" fill={colors.grayMedium}/>
              <path d="M307.096 81.85H201C199.343 81.85 198 83.1932 198 84.85V85.9C198 87.5569 199.343 88.9 201 88.9H307.096C308.753 88.9 310.096 87.5569 310.096 85.9V84.85C310.096 83.1932 308.753 81.85 307.096 81.85Z" fill={colors.grayMedium}/>
            </g>
            <path d="M389.954 86.5C393.82 86.5 396.954 83.366 396.954 79.5C396.954 75.634 393.82 72.5 389.954 72.5C386.088 72.5 382.954 75.634 382.954 79.5C382.954 83.366 386.088 86.5 389.954 86.5Z" fill={colors.grayMedium}/>
            <path d="M389.954 82.5C391.611 82.5 392.954 81.1569 392.954 79.5C392.954 77.8432 391.611 76.5 389.954 76.5C388.297 76.5 386.954 77.8432 386.954 79.5C386.954 81.1569 388.297 82.5 389.954 82.5Z" fill={colors.bgMain}/>
          </g>
          {/* Repetitive list items... */}
          <mask id="mask6_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="189" y="111" width="225" height="39">
            <path d="M414 111H189V150H414V111Z" fill="white"/>
          </mask>
          <g mask="url(#mask6_4_417)">
            <path d="M410 111H193C190.791 111 189 112.791 189 115V146C189 148.209 190.791 150 193 150H410C412.209 150 414 148.209 414 146V115C414 112.791 412.209 111 410 111Z" fill={colors.bgElement} {...hcBorderStyle}/>
            <mask id="mask7_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="198" y="122" width="167" height="17">
              <path d="M365 122.7H198V138.3H365V122.7Z" fill="white"/>
            </mask>
            <g mask="url(#mask7_4_417)">
              <path d="M362.075 122.7H200.925C199.31 122.7 198 124.01 198 125.625C198 127.24 199.31 128.55 200.925 128.55H362.075C363.69 128.55 365 127.24 365 125.625C365 124.01 363.69 122.7 362.075 122.7Z" fill={colors.grayMedium}/>
              <path d="M307.171 132.45H200.925C199.31 132.45 198 133.76 198 135.375C198 136.99 199.31 138.3 200.925 138.3H307.171C308.786 138.3 310.096 136.99 310.096 135.375C310.096 133.76 308.786 132.45 307.171 132.45Z" fill={colors.grayMedium}/>
            </g>
            <path d="M389.954 137.5C393.82 137.5 396.954 134.366 396.954 130.5C396.954 126.634 393.82 123.5 389.954 123.5C386.088 123.5 382.954 126.634 382.954 130.5C382.954 134.366 386.088 137.5 389.954 137.5Z" fill={colors.grayMedium}/>
            <path d="M389.954 133.5C391.611 133.5 392.954 132.157 392.954 130.5C392.954 128.843 391.611 127.5 389.954 127.5C388.297 127.5 386.954 128.843 386.954 130.5C386.954 132.157 388.297 133.5 389.954 133.5Z" fill={colors.bgMain}/>
          </g>
          <mask id="mask8_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="189" y="158" width="225" height="39">
            <path d="M414 158H189V197H414V158Z" fill="white"/>
          </mask>
          <g mask="url(#mask8_4_417)">
            <path d="M410 158H193C190.791 158 189 159.791 189 162V193C189 195.209 190.791 197 193 197H410C412.209 197 414 195.209 414 193V162C414 159.791 412.209 158 410 158Z" fill={colors.bgElement} {...hcBorderStyle}/>
            <mask id="mask9_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="198" y="169" width="167" height="17">
              <path d="M365 169.7H198V185.3H365V169.7Z" fill="white"/>
            </mask>
            <g mask="url(#mask9_4_417)">
              <path d="M362.075 169.7H200.925C199.31 169.7 198 171.01 198 172.625C198 174.24 199.31 175.55 200.925 175.55H362.075C363.69 175.55 365 174.24 365 172.625C365 171.01 363.69 169.7 362.075 169.7Z" fill={colors.grayMedium}/>
              <path d="M307.171 179.45H200.925C199.31 179.45 198 180.76 198 182.375C198 183.99 199.31 185.3 200.925 185.3H307.171C308.786 185.3 310.096 183.99 310.096 182.375C310.096 180.76 308.786 179.45 307.171 179.45Z" fill={colors.grayMedium}/>
            </g>
            <path d="M389.954 184.5C393.82 184.5 396.954 181.366 396.954 177.5C396.954 173.634 393.82 170.5 389.954 170.5C386.088 170.5 382.954 173.634 382.954 177.5C382.954 181.366 386.088 184.5 389.954 184.5Z" fill={colors.grayMedium}/>
            <path d="M389.954 180.5C391.611 180.5 392.954 179.157 392.954 177.5C392.954 175.843 391.611 174.5 389.954 174.5C388.297 174.5 386.954 175.843 386.954 177.5C386.954 179.157 388.297 180.5 389.954 180.5Z" fill={colors.grayDark}/>
          </g>
          <mask id="mask10_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="189" y="299" width="225" height="39">
            <path d="M414 299H189V338H414V299Z" fill="white"/>
          </mask>
          <g mask="url(#mask10_4_417)">
            <path d="M410 299H193C190.791 299 189 300.791 189 303V334C189 336.209 190.791 338 193 338H410C412.209 338 414 336.209 414 334V303C414 300.791 412.209 299 410 299Z" fill={colors.bgElement} {...hcBorderStyle}/>
            <mask id="mask11_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="198" y="310" width="167" height="17">
              <path d="M365 310.7H198V326.3H365V310.7Z" fill="white"/>
            </mask>
            <g mask="url(#mask11_4_417)">
              <path d="M362.075 310.7H200.925C199.31 310.7 198 312.01 198 313.625C198 315.24 199.31 316.55 200.925 316.55H362.075C363.69 316.55 365 315.24 365 313.625C365 312.01 363.69 310.7 362.075 310.7Z" fill={colors.grayMedium}/>
              <path d="M307.171 320.45H200.925C199.31 320.45 198 321.76 198 323.375C198 324.99 199.31 326.3 200.925 326.3H307.171C308.786 326.3 310.096 324.99 310.096 323.375C310.096 321.76 308.786 320.45 307.171 320.45Z" fill={colors.grayMedium}/>
            </g>
            <path d="M389.954 325.5C393.82 325.5 396.954 322.366 396.954 318.5C396.954 314.634 393.82 311.5 389.954 311.5C386.088 311.5 382.954 314.634 382.954 318.5C382.954 322.366 386.088 325.5 389.954 325.5Z" fill={colors.grayMedium}/>
            <path d="M389.954 321.5C391.611 321.5 392.954 320.157 392.954 318.5C392.954 316.843 391.611 315.5 389.954 315.5C388.297 315.5 386.954 316.843 386.954 318.5C386.954 320.157 388.297 321.5 389.954 321.5Z" fill={colors.bgMain}/>
          </g>
          <mask id="mask12_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="189" y="252" width="225" height="39">
            <path d="M414 252H189V291H414V252Z" fill="white"/>
          </mask>
          <g mask="url(#mask12_4_417)">
            <path d="M410 252H193C190.791 252 189 253.791 189 256V287C189 289.209 190.791 291 193 291H410C412.209 291 414 289.209 414 287V256C414 253.791 412.209 252 410 252Z" fill={colors.bgElement} {...hcBorderStyle}/>
            <mask id="mask13_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="198" y="263" width="167" height="17">
              <path d="M365 263.7H198V279.3H365V263.7Z" fill="white"/>
            </mask>
            <g mask="url(#mask13_4_417)">
              <path d="M362.075 263.7H200.925C199.31 263.7 198 265.01 198 266.625C198 268.24 199.31 269.55 200.925 269.55H362.075C363.69 269.55 365 268.24 365 266.625C365 265.01 363.69 263.7 362.075 263.7Z" fill={colors.grayMedium}/>
              <path d="M307.171 273.45H200.925C199.31 273.45 198 274.76 198 276.375C198 277.99 199.31 279.3 200.925 279.3H307.171C308.786 279.3 310.096 277.99 310.096 276.375C310.096 274.76 308.786 273.45 307.171 273.45Z" fill={colors.grayMedium}/>
            </g>
            <path d="M389.954 278.5C393.82 278.5 396.954 275.366 396.954 271.5C396.954 267.634 393.82 264.5 389.954 264.5C386.088 264.5 382.954 267.634 382.954 271.5C382.954 275.366 386.088 278.5 389.954 278.5Z" fill={colors.grayMedium}/>
            <path d="M389.954 274.5C391.611 274.5 392.954 273.157 392.954 271.5C392.954 269.843 391.611 268.5 389.954 268.5C388.297 268.5 386.954 269.843 386.954 271.5C386.954 273.157 388.297 274.5 389.954 274.5Z" fill={colors.bgMain}/>
          </g>
          <mask id="mask14_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="189" y="205" width="225" height="39">
            <path d="M414 205H189V244H414V205Z" fill="white"/>
          </mask>
          <g mask="url(#mask14_4_417)">
            <path d="M410 205H193C190.791 205 189 206.791 189 209V240C189 242.209 190.791 244 193 244H410C412.209 244 414 242.209 414 240V209C414 206.791 412.209 205 410 205Z" fill={colors.bgElement} {...hcBorderStyle}/>
            <mask id="mask15_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="198" y="216" width="167" height="17">
              <path d="M365 216.7H198V232.3H365V216.7Z" fill="white"/>
            </mask>
            <g mask="url(#mask15_4_417)">
              <path d="M362.075 216.7H200.925C199.31 216.7 198 218.01 198 219.625C198 221.24 199.31 222.55 200.925 222.55H362.075C363.69 222.55 365 221.24 365 219.625C365 218.01 363.69 216.7 362.075 216.7Z" fill={colors.grayMedium}/>
              <path d="M307.171 226.45H200.925C199.31 226.45 198 227.76 198 229.375C198 230.99 199.31 232.3 200.925 232.3H307.171C308.786 232.3 310.096 230.99 310.096 229.375C310.096 227.76 308.786 226.45 307.171 226.45Z" fill={colors.grayMedium}/>
            </g>
            <path d="M389.954 231.5C393.82 231.5 396.954 228.366 396.954 224.5C396.954 220.634 393.82 217.5 389.954 217.5C386.088 217.5 382.954 220.634 382.954 224.5C382.954 228.366 386.088 231.5 389.954 231.5Z" fill={colors.grayMedium}/>
            <path d="M389.954 227.5C391.611 227.5 392.954 226.157 392.954 224.5C392.954 222.843 391.611 221.5 389.954 221.5C388.297 221.5 386.954 222.843 386.954 224.5C386.954 226.157 388.297 227.5 389.954 227.5Z" fill={colors.bgMain}/>
          </g>
        </g>
      </g>
      
      {/* ====================================================================== */}
      {/* == LEFT-SIDE MONITORS (PHONES)                                      == */}
      {/* ====================================================================== */}
      {/* Top Phone */}
      <mask id="mask16_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="29" y="20" width="98" height="185">
        <path d="M126.401 20H29V205H126.401V20Z" fill="white"/>
      </mask>
      <g mask="url(#mask16_4_417)">
        <path d="M121.5 20H33.9007C31.1941 20 29 22.1941 29 24.9007V200.099C29 202.806 31.1941 205 33.9007 205H121.5C124.207 205 126.401 202.806 126.401 200.099V24.9007C126.401 22.1941 124.207 20 121.5 20Z" fill={colors.grayMedium}/>
        <path d="M77.3941 193.361C82.4689 193.361 86.5828 189.247 86.5828 184.172C86.5828 179.097 82.4689 174.983 77.3941 174.983C72.3193 174.983 68.2053 179.097 68.2053 184.172C68.2053 189.247 72.3193 193.361 77.3941 193.361Z" fill={colors.bgElement} {...hcBorderStyle}/>
        <path d="M69.4305 32.2517C70.1071 32.2517 70.6557 31.7031 70.6557 31.0265C70.6557 30.3499 70.1071 29.8013 69.4305 29.8013C68.7538 29.8013 68.2053 30.3499 68.2053 31.0265C68.2053 31.7031 68.7538 32.2517 69.4305 32.2517Z" fill={colors.grayDark} {...hcBorderStyle}/>
        <path d="M85.3576 29.8013H74.9437C74.267 29.8013 73.7185 30.3499 73.7185 31.0265C73.7185 31.7031 74.267 32.2517 74.9437 32.2517H85.3576C86.0342 32.2517 86.5827 31.7031 86.5827 31.0265C86.5827 30.3499 86.0342 29.8013 85.3576 29.8013Z" fill={colors.grayDark} {...hcBorderStyle}/>
        <mask id="mask17_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="37" y="37" width="81" height="126">
        <path d="M117.825 37.1523H37.5762V162.119H117.825V37.1523Z" fill="white"/>
        </mask>
        <g mask="url(#mask17_4_417)">
        <mask id="mask18_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="37" y="37" width="81" height="34">
        <path d="M117.825 37.1523H37.5762V70.2318H117.825V37.1523Z" fill="white"/>
        </mask>
        <g mask="url(#mask18_4_417)">
        <path d="M115.374 37.1523H40.0265C38.6732 37.1523 37.5762 38.2494 37.5762 39.6026V67.7815C37.5762 69.1347 38.6732 70.2318 40.0265 70.2318H115.374C116.727 70.2318 117.825 69.1347 117.825 67.7815V39.6026C117.825 38.2494 116.727 37.1523 115.374 37.1523Z" fill={colors.bgElement} {...hcBorderStyle}/>
        <mask id="mask19_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="61" y="47" width="46" height="14">
        <path d="M106.186 47.0761H61.467V60.3079H106.186V47.0761Z" fill="white"/>
        </mask>
        <g mask="url(#mask19_4_417)">
        <path d="M104.348 47.0761H63.3048C62.2898 47.0761 61.467 47.8989 61.467 48.9139V50.2003C61.467 51.2153 62.2898 52.0381 63.3048 52.0381H104.348C105.363 52.0381 106.186 51.2153 106.186 50.2003V48.9139C106.186 47.8989 105.363 47.0761 104.348 47.0761Z" fill={colors.grayMedium}/>
        <path d="M89.6458 55.346H63.3048C62.2898 55.346 61.467 56.1688 61.467 57.1838V58.4702C61.467 59.4852 62.2898 60.308 63.3048 60.308H89.6458C90.6608 60.308 91.4836 59.4852 91.4836 58.4702V57.1838C91.4836 56.1688 90.6608 55.346 89.6458 55.346Z" fill={colors.grayMedium}/>
        </g>
        <path d="M50.4403 61.0431C54.5002 61.0431 57.7913 57.7519 57.7913 53.6921C57.7913 49.6322 54.5002 46.3411 50.4403 46.3411C46.3805 46.3411 43.0894 49.6322 43.0894 53.6921C43.0894 57.7519 46.3805 61.0431 50.4403 61.0431Z" fill={colors.grayMedium}/>
        </g>
        <mask id="mask20_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="37" y="75" width="81" height="26">
        <path d="M117.825 75.1324H37.5762V100.861H117.825V75.1324Z" fill="white"/>
        </mask>
        <g mask="url(#mask20_4_417)">
        <path d="M115.374 75.1324H40.0265C38.6732 75.1324 37.5762 76.2295 37.5762 77.5828V98.4106C37.5762 99.7639 38.6732 100.861 40.0265 100.861H115.374C116.727 100.861 117.825 99.7639 117.825 98.4106V77.5828C117.825 76.2295 116.727 75.1324 115.374 75.1324Z" fill={colors.bgElement} {...hcBorderStyle}/>
        <mask id="mask21_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="61" y="82" width="46" height="12">
        <path d="M106.186 82.851H61.467V93.1424H106.186V82.851Z" fill="white"/>
        </mask>
        <g mask="url(#mask21_4_417)">
        <path d="M104.348 82.851H63.3048C62.2898 82.851 61.467 83.6738 61.467 84.6887V84.8725C61.467 85.8875 62.2898 86.7102 63.3048 86.7102H104.348C105.363 86.7102 106.186 85.8875 106.186 84.8725V84.6887C106.186 83.6738 105.363 82.851 104.348 82.851Z" fill={colors.grayMedium}/>
        <path d="M89.6458 89.2831H63.3048C62.2898 89.2831 61.467 90.1059 61.467 91.1209V91.3046C61.467 92.3196 62.2898 93.1424 63.3048 93.1424H89.6458C90.6608 93.1424 91.4836 92.3196 91.4836 91.3046V91.1209C91.4836 90.1059 90.6608 89.2831 89.6458 89.2831Z" fill={colors.grayMedium}/>
        </g>
        <path d="M50.4403 95.3477C54.5002 95.3477 57.7913 92.0565 57.7913 87.9967C57.7913 83.9368 54.5002 80.6457 50.4403 80.6457C46.3805 80.6457 43.0894 83.9368 43.0894 87.9967C43.0894 92.0565 46.3805 95.3477 50.4403 95.3477Z" fill={colors.grayMedium}/>
        </g>
        <mask id="mask22_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="37" y="105" width="81" height="27">
        <path d="M117.825 105.762H37.5762V131.49H117.825V105.762Z" fill="white"/>
        </mask>
        <g mask="url(#mask22_4_417)">
        <path d="M115.374 105.762H40.0265C38.6732 105.762 37.5762 106.859 37.5762 108.212V129.04C37.5762 130.393 38.6732 131.49 40.0265 131.49H115.374C116.727 131.49 117.825 130.393 117.825 129.04V108.212C117.825 106.859 116.727 105.762 115.374 105.762Z" fill={colors.bgElement} {...hcBorderStyle}/>
        <mask id="mask23_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="61" y="113" width="46" height="11">
        <path d="M106.186 113.48H61.467V123.772H106.186V113.48Z" fill="white"/>
        </mask>
        <g mask="url(#mask23_4_417)">
        <path d="M104.348 113.48H63.3048C62.2898 113.48 61.467 114.303 61.467 115.318V115.502C61.467 116.517 62.2898 117.339 63.3048 117.339H104.348C105.363 117.339 106.186 116.517 106.186 115.502V115.318C106.186 114.303 105.363 113.48 104.348 113.48Z" fill={colors.grayMedium}/>
        <path d="M89.6458 119.912H63.3048C62.2898 119.912 61.467 120.735 61.467 121.75V121.934C61.467 122.949 62.2898 123.771 63.3048 123.771H89.6458C90.6608 123.771 91.4836 122.949 91.4836 121.934V121.75C91.4836 120.735 90.6608 119.912 89.6458 119.912Z" fill={colors.grayMedium}/>
        </g>
        <path d="M50.4403 125.977C54.5002 125.977 57.7913 122.686 57.7913 118.626C57.7913 114.566 54.5002 111.275 50.4403 111.275C46.3805 111.275 43.0894 114.566 43.0894 118.626C43.0894 122.686 46.3805 125.977 50.4403 125.977Z" fill={colors.grayDark}/>
        </g>
        <mask id="mask24_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="37" y="136" width="81" height="27">
        <path d="M117.825 136.391H37.5762V162.119H117.825V136.391Z" fill="white"/>
        </mask>
        <g mask="url(#mask24_4_417)">
        <path d="M115.374 136.391H40.0265C38.6732 136.391 37.5762 137.488 37.5762 138.841V159.669C37.5762 161.022 38.6732 162.119 40.0265 162.119H115.374C116.727 162.119 117.825 161.022 117.825 159.669V138.841C117.825 137.488 116.727 136.391 115.374 136.391Z" fill={colors.bgElement} {...hcBorderStyle}/>
        <mask id="mask25_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="61" y="144" width="46" height="11">
        <path d="M106.186 144.109H61.467V154.401H106.186V144.109Z" fill="white"/>
        </mask>
        <g mask="url(#mask25_4_417)">
        <path d="M104.348 144.109H63.3048C62.2898 144.109 61.467 144.932 61.467 145.947V146.131C61.467 147.146 62.2898 147.969 63.3048 147.969H104.348C105.363 147.969 106.186 147.146 106.186 146.131V145.947C106.186 144.932 105.363 144.109 104.348 144.109Z" fill={colors.grayMedium}/>
        <path d="M89.6458 150.541H63.3048C62.2898 150.541 61.467 151.364 61.467 152.379V152.563C61.467 153.578 62.2898 154.401 63.3048 154.401H89.6458C90.6608 154.401 91.4836 153.578 91.4836 152.563V152.379C91.4836 151.364 90.6608 150.541 89.6458 150.541Z" fill={colors.grayMedium}/>
        </g>
        <path d="M50.4403 156.606C54.5002 156.606 57.7913 153.315 57.7913 149.255C57.7913 145.195 54.5002 141.904 50.4403 141.904C46.3805 141.904 43.0894 145.195 43.0894 149.255C43.0894 153.315 46.3805 156.606 50.4403 156.606Z" fill={colors.grayMedium}/>
        </g>
        </g>
      </g>
      {/* Bottom Phone */}
      <mask id="mask26_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="29" y="281" width="98" height="185">
        <path d="M126.401 281H29V466H126.401V281Z" fill="white"/>
      </mask>
      <g mask="url(#mask26_4_417)">
        <path d="M121.5 281H33.9007C31.1941 281 29 283.194 29 285.901V461.099C29 463.806 31.1941 466 33.9007 466H121.5C124.207 466 126.401 463.806 126.401 461.099V285.901C126.401 283.194 124.207 281 121.5 281Z" fill={colors.grayMedium}/>
        <path d="M77.3941 454.361C82.4689 454.361 86.5828 450.247 86.5828 445.172C86.5828 440.097 82.4689 435.983 77.3941 435.983C72.3193 435.983 68.2053 440.097 68.2053 445.172C68.2053 450.247 72.3193 454.361 77.3941 454.361Z" fill={colors.bgElement} {...hcBorderStyle}/>
        <path d="M69.4305 293.252C70.1071 293.252 70.6557 292.703 70.6557 292.026C70.6557 291.35 70.1071 290.801 69.4305 290.801C68.7538 290.801 68.2053 291.35 68.2053 292.026C68.2053 292.703 68.7538 293.252 69.4305 293.252Z" fill={colors.grayDark} {...hcBorderStyle}/>
        <path d="M85.3576 290.801H74.9437C74.267 290.801 73.7185 291.35 73.7185 292.026C73.7185 292.703 74.267 293.252 74.9437 293.252H85.3576C86.0342 293.252 86.5827 292.703 86.5827 292.026C86.5827 291.35 86.0342 290.801 85.3576 290.801Z" fill={colors.grayDark} {...hcBorderStyle}/>
        <mask id="mask27_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="37" y="298" width="81" height="126">
        <path d="M117.825 298.152H37.5762V423.119H117.825V298.152Z" fill="white"/>
        </mask>
        <g mask="url(#mask27_4_417)">
        <mask id="mask28_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="37" y="298" width="81" height="34">
        <path d="M117.825 298.152H37.5762V331.232H117.825V298.152Z" fill="white"/>
        </mask>
        <g mask="url(#mask28_4_417)">
        <path d="M115.374 298.152H40.0265C38.6732 298.152 37.5762 299.249 37.5762 300.603V328.781C37.5762 330.135 38.6732 331.232 40.0265 331.232H115.374C116.727 331.232 117.825 330.135 117.825 328.781V300.603C117.825 299.249 116.727 298.152 115.374 298.152Z" fill={colors.bgElement} {...hcBorderStyle}/>
        <mask id="mask29_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="61" y="308" width="46" height="14">
        <path d="M106.186 308.076H61.467V321.308H106.186V308.076Z" fill="white"/>
        </mask>
        <g mask="url(#mask29_4_417)">
        <path d="M104.348 308.076H63.3048C62.2898 308.076 61.467 308.899 61.467 309.914V311.2C61.467 312.215 62.2898 313.038 63.3048 313.038H104.348C105.363 313.038 106.186 312.215 106.186 311.2V309.914C106.186 308.899 105.363 308.076 104.348 308.076Z" fill={colors.grayMedium}/>
        <path d="M89.6458 316.346H63.3048C62.2898 316.346 61.467 317.169 61.467 318.184V319.47C61.467 320.485 62.2898 321.308 63.3048 321.308H89.6458C90.6608 321.308 91.4836 320.485 91.4836 319.47V318.184C91.4836 317.169 90.6608 316.346 89.6458 316.346Z" fill={colors.grayMedium}/>
        </g>
        <path d="M50.4403 322.043C54.5002 322.043 57.7913 318.752 57.7913 314.692C57.7913 310.632 54.5002 307.341 50.4403 307.341C46.3805 307.341 43.0894 310.632 43.0894 314.692C43.0894 318.752 46.3805 322.043 50.4403 322.043Z" fill={colors.grayMedium}/>
        </g>
        <mask id="mask30_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="37" y="336" width="81" height="26">
        <path d="M117.825 336.132H37.5762V361.861H117.825V336.132Z" fill="white"/>
        </mask>
        <g mask="url(#mask30_4_417)">
        <path d="M115.374 336.132H40.0265C38.6732 336.132 37.5762 337.229 37.5762 338.583V359.411C37.5762 360.764 38.6732 361.861 40.0265 361.861H115.374C116.727 361.861 117.825 360.764 117.825 359.411V338.583C117.825 337.229 116.727 336.132 115.374 336.132Z" fill={colors.bgElement} {...hcBorderStyle}/>
        <mask id="mask31_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="61" y="343" width="46" height="12">
        <path d="M106.186 343.851H61.467V354.142H106.186V343.851Z" fill="white"/>
        </mask>
        <g mask="url(#mask31_4_417)">
        <path d="M104.348 343.851H63.3048C62.2898 343.851 61.467 344.674 61.467 345.689V345.872C61.467 346.887 62.2898 347.71 63.3048 347.71H104.348C105.363 347.71 106.186 346.887 106.186 345.872V345.689C106.186 344.674 105.363 343.851 104.348 343.851Z" fill={colors.grayMedium}/>
        <path d="M89.6458 350.283H63.3048C62.2898 350.283 61.467 351.106 61.467 352.121V352.305C61.467 353.32 62.2898 354.142 63.3048 354.142H89.6458C90.6608 354.142 91.4836 353.32 91.4836 352.305V352.121C91.4836 351.106 90.6608 350.283 89.6458 350.283Z" fill={colors.grayMedium}/>
        </g>
        <path d="M50.4403 356.348C54.5002 356.348 57.7913 353.057 57.7913 348.997C57.7913 344.937 54.5002 341.646 50.4403 341.646C46.3805 341.646 43.0894 344.937 43.0894 348.997C43.0894 353.057 46.3805 356.348 50.4403 356.348Z" fill={colors.grayMedium}/>
        </g>
        <mask id="mask32_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="37" y="366" width="81" height="27">
        <path d="M117.825 366.762H37.5762V392.49H117.825V366.762Z" fill="white"/>
        </mask>
        <g mask="url(#mask32_4_417)">
        <path d="M115.374 366.762H40.0265C38.6732 366.762 37.5762 367.859 37.5762 369.212V390.04C37.5762 391.393 38.6732 392.49 40.0265 392.49H115.374C116.727 392.49 117.825 391.393 117.825 390.04V369.212C117.825 367.859 116.727 366.762 115.374 366.762Z" fill={colors.bgElement} {...hcBorderStyle}/>
        <mask id="mask33_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="61" y="374" width="46" height="11">
        <path d="M106.186 374.48H61.467V384.771H106.186V374.48Z" fill="white"/>
        </mask>
        <g mask="url(#mask33_4_417)">
        <path d="M104.348 374.48H63.3048C62.2898 374.48 61.467 375.303 61.467 376.318V376.502C61.467 377.517 62.2898 378.339 63.3048 378.339H104.348C105.363 378.339 106.186 377.517 106.186 376.502V376.318C106.186 375.303 105.363 374.48 104.348 374.48Z" fill={colors.grayMedium}/>
        <path d="M89.6458 380.912H63.3048C62.2898 380.912 61.467 381.735 61.467 382.75V382.934C61.467 383.949 62.2898 384.771 63.3048 384.771H89.6458C90.6608 384.771 91.4836 383.949 91.4836 382.934V382.75C91.4836 381.735 90.6608 380.912 89.6458 380.912Z" fill={colors.grayMedium}/>
        </g>
        <path d="M50.4403 386.977C54.5002 386.977 57.7913 383.686 57.7913 379.626C57.7913 375.566 54.5002 372.275 50.4403 372.275C46.3805 372.275 43.0894 375.566 43.0894 379.626C43.0894 383.686 46.3805 386.977 50.4403 386.977Z" fill={colors.grayDark}/>
        </g>
        <mask id="mask34_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="37" y="397" width="81" height="27">
        <path d="M117.825 397.391H37.5762V423.119H117.825V397.391Z" fill="white"/>
        </mask>
        <g mask="url(#mask34_4_417)">
        <path d="M115.374 397.391H40.0265C38.6732 397.391 37.5762 398.488 37.5762 399.841V420.669C37.5762 422.022 38.6732 423.119 40.0265 423.119H115.374C116.727 423.119 117.825 422.022 117.825 420.669V399.841C117.825 398.488 116.727 397.391 115.374 397.391Z" fill={colors.bgElement} {...hcBorderStyle}/>
        <mask id="mask35_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="61" y="405" width="46" height="11">
        <path d="M106.186 405.109H61.467V415.401H106.186V405.109Z" fill="white"/>
        </mask>
        <g mask="url(#mask35_4_417)">
        <path d="M104.348 405.109H63.3048C62.2898 405.109 61.467 405.932 61.467 406.947V407.131C61.467 408.146 62.2898 408.968 63.3048 408.968H104.348C105.363 408.968 106.186 408.146 106.186 407.131V406.947C106.186 405.932 105.363 405.109 104.348 405.109Z" fill={colors.grayMedium}/>
        <path d="M89.6458 411.541H63.3048C62.2898 411.541 61.467 412.364 61.467 413.379V413.563C61.467 414.578 62.2898 415.401 63.3048 415.401H89.6458C90.6608 415.401 91.4836 414.578 91.4836 413.563V413.379C91.4836 412.364 90.6608 411.541 89.6458 411.541Z" fill={colors.grayMedium}/>
        </g>
        <path d="M50.4403 417.606C54.5002 417.606 57.7913 414.315 57.7913 410.255C57.7913 406.195 54.5002 402.904 50.4403 402.904C46.3805 402.904 43.0894 406.195 43.0894 410.255C43.0894 414.315 46.3805 417.606 50.4403 417.606Z" fill={colors.grayMedium}/>
        </g>
        </g>
      </g>
      {/* Far Right Phone */}
      <mask id="mask36_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="542" y="281" width="98" height="185">
        <path d="M639.401 281H542V466H639.401V281Z" fill="white"/>
      </mask>
      <g mask="url(#mask36_4_417)">
        <path d="M634.5 281H546.901C544.194 281 542 283.194 542 285.901V461.099C542 463.806 544.194 466 546.901 466H634.5C637.207 466 639.401 463.806 639.401 461.099V285.901C639.401 283.194 637.207 281 634.5 281Z" fill={colors.grayMedium}/>
        <path d="M590.394 454.361C595.469 454.361 599.583 450.247 599.583 445.172C599.583 440.097 595.469 435.983 590.394 435.983C585.319 435.983 581.205 440.097 581.205 445.172C581.205 450.247 585.319 454.361 590.394 454.361Z" fill={colors.bgElement} {...hcBorderStyle}/>
        <path d="M582.43 293.252C583.107 293.252 583.656 292.703 583.656 292.026C583.656 291.35 583.107 290.801 582.43 290.801C581.754 290.801 581.205 291.35 581.205 292.026C581.205 292.703 581.754 293.252 582.43 293.252Z" fill={colors.grayDark} {...hcBorderStyle}/>
        <path d="M598.358 290.801H587.944C587.267 290.801 586.719 291.35 586.719 292.026C586.719 292.703 587.267 293.252 587.944 293.252H598.358C599.034 293.252 599.583 292.703 599.583 292.026C599.583 291.35 599.034 290.801 598.358 290.801Z" fill={colors.grayDark} {...hcBorderStyle}/>
        <mask id="mask37_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="550" y="298" width="81" height="126">
        <path d="M630.825 298.152H550.576V423.119H630.825V298.152Z" fill="white"/>
        </mask>
        <g mask="url(#mask37_4_417)">
        <mask id="mask38_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="550" y="298" width="81" height="34">
        <path d="M630.825 298.152H550.576V331.232H630.825V298.152Z" fill="white"/>
        </mask>
        <g mask="url(#mask38_4_417)">
        <path d="M628.374 298.152H553.027C551.673 298.152 550.576 299.249 550.576 300.603V328.781C550.576 330.135 551.673 331.232 553.027 331.232H628.374C629.727 331.232 630.825 330.135 630.825 328.781V300.603C630.825 299.249 629.727 298.152 628.374 298.152Z" fill={colors.bgElement} {...hcBorderStyle}/>
        <mask id="mask39_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="574" y="308" width="46" height="14">
        <path d="M619.185 308.076H574.467V321.308H619.185V308.076Z" fill="white"/>
        </mask>
        <g mask="url(#mask39_4_417)">
        <path d="M617.348 308.076H576.305C575.29 308.076 574.467 308.899 574.467 309.914V311.2C574.467 312.215 575.29 313.038 576.305 313.038H617.348C618.363 313.038 619.185 312.215 619.185 311.2V309.914C619.185 308.899 618.363 308.076 617.348 308.076Z" fill={colors.grayMedium}/>
        <path d="M602.646 316.346H576.305C575.29 316.346 574.467 317.169 574.467 318.184V319.47C574.467 320.485 575.29 321.308 576.305 321.308H602.646C603.661 321.308 604.483 320.485 604.483 319.47V318.184C604.483 317.169 603.661 316.346 602.646 316.346Z" fill={colors.grayMedium}/>
        </g>
        <path d="M563.44 322.043C567.5 322.043 570.791 318.752 570.791 314.692C570.791 310.632 567.5 307.341 563.44 307.341C559.381 307.341 556.089 310.632 556.089 314.692C556.089 318.752 559.381 322.043 563.44 322.043Z" fill={colors.grayMedium}/>
        </g>
        <mask id="mask40_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="550" y="336" width="81" height="26">
        <path d="M630.825 336.132H550.576V361.861H630.825V336.132Z" fill="white"/>
        </mask>
        <g mask="url(#mask40_4_417)">
        <path d="M628.374 336.132H553.027C551.673 336.132 550.576 337.229 550.576 338.583V359.411C550.576 360.764 551.673 361.861 553.027 361.861H628.374C629.727 361.861 630.825 360.764 630.825 359.411V338.583C630.825 337.229 629.727 336.132 628.374 336.132Z" fill={colors.bgElement} {...hcBorderStyle}/>
        <mask id="mask41_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="574" y="343" width="46" height="12">
        <path d="M619.185 343.851H574.467V354.142H619.185V343.851Z" fill="white"/>
        </mask>
        <g mask="url(#mask41_4_417)">
        <path d="M617.348 343.851H576.305C575.29 343.851 574.467 344.674 574.467 345.689V345.872C574.467 346.887 575.29 347.71 576.305 347.71H617.348C618.363 347.71 619.185 346.887 619.185 345.872V345.689C619.185 344.674 618.363 343.851 617.348 343.851Z" fill={colors.grayMedium}/>
        <path d="M602.646 350.283H576.305C575.29 350.283 574.467 351.106 574.467 352.121V352.305C574.467 353.32 575.29 354.142 576.305 354.142H602.646C603.661 354.142 604.483 353.32 604.483 352.305V352.121C604.483 351.106 603.661 350.283 602.646 350.283Z" fill={colors.grayMedium}/>
        </g>
        <path d="M563.44 356.348C567.5 356.348 570.791 353.057 570.791 348.997C570.791 344.937 567.5 341.646 563.44 341.646C559.381 341.646 556.089 344.937 556.089 348.997C556.089 353.057 559.381 356.348 563.44 356.348Z" fill={colors.grayMedium}/>
        </g>
        <mask id="mask42_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="550" y="366" width="81" height="27">
        <path d="M630.825 366.762H550.576V392.49H630.825V366.762Z" fill="white"/>
        </mask>
        <g mask="url(#mask42_4_417)">
        <path d="M628.374 366.762H553.027C551.673 366.762 550.576 367.859 550.576 369.212V390.04C550.576 391.393 551.673 392.49 553.027 392.49H628.374C629.727 392.49 630.825 391.393 630.825 390.04V369.212C630.825 367.859 629.727 366.762 628.374 366.762Z" fill={colors.bgElement} {...hcBorderStyle}/>
        <mask id="mask43_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="574" y="374" width="46" height="11">
        <path d="M619.185 374.48H574.467V384.771H619.185V374.48Z" fill="white"/>
        </mask>
        <g mask="url(#mask43_4_417)">
        <path d="M617.348 374.48H576.305C575.29 374.48 574.467 375.303 574.467 376.318V376.502C574.467 377.517 575.29 378.339 576.305 378.339H617.348C618.363 378.339 619.185 377.517 619.185 376.502V376.318C619.185 375.303 618.363 374.48 617.348 374.48Z" fill={colors.grayMedium}/>
        <path d="M602.646 380.912H576.305C575.29 380.912 574.467 381.735 574.467 382.75V382.934C574.467 383.949 575.29 384.771 576.305 384.771H602.646C603.661 384.771 604.483 383.949 604.483 382.934V382.75C604.483 381.735 603.661 380.912 602.646 380.912Z" fill={colors.grayMedium}/>
        </g>
        <path d="M563.44 386.977C567.5 386.977 570.791 383.686 570.791 379.626C570.791 375.566 567.5 372.275 563.44 372.275C559.381 372.275 556.089 375.566 556.089 379.626C556.089 383.686 559.381 386.977 563.44 386.977Z" fill={colors.grayDark}/>
        </g>
        <mask id="mask44_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="550" y="397" width="81" height="27">
        <path d="M630.825 397.391H550.576V423.119H630.825V397.391Z" fill="white"/>
        </mask>
        <g mask="url(#mask44_4_417)">
        <path d="M628.374 397.391H553.027C551.673 397.391 550.576 398.488 550.576 399.841V420.669C550.576 422.022 551.673 423.119 553.027 423.119H628.374C629.727 423.119 630.825 422.022 630.825 420.669V399.841C630.825 398.488 629.727 397.391 628.374 397.391Z" fill={colors.bgElement} {...hcBorderStyle}/>
        <mask id="mask45_4_417" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="574" y="405" width="46" height="11">
        <path d="M619.185 405.109H574.467V415.401H619.185V405.109Z" fill="white"/>
        </mask>
        <g mask="url(#mask45_4_417)">
        <path d="M617.348 405.109H576.305C575.29 405.109 574.467 405.932 574.467 406.947V407.131C574.467 408.146 575.29 408.968 576.305 408.968H617.348C618.363 408.968 619.185 408.146 619.185 407.131V406.947C619.185 405.932 618.363 405.109 617.348 405.109Z" fill={colors.grayMedium}/>
        <path d="M602.646 411.541H576.305C575.29 411.541 574.467 412.364 574.467 413.379V413.563C574.467 414.578 575.29 415.401 576.305 415.401H602.646C603.661 415.401 604.483 414.578 604.483 413.563V413.379C604.483 412.364 603.661 411.541 602.646 411.541Z" fill={colors.grayMedium}/>
        </g>
        <path d="M563.44 417.606C567.5 417.606 570.791 414.315 570.791 410.255C570.791 406.195 567.5 402.904 563.44 402.904C559.381 402.904 556.089 406.195 556.089 410.255C556.089 414.315 559.381 417.606 563.44 417.606Z" fill={colors.grayMedium}/>
        </g>
        </g>
      </g>
      
      {/* ====================================================================== */}
      {/* == BACKGROUND CHARTS AND PERSONA                                    == */}
      {/* ====================================================================== */}
      {/* Top Right: Circular Chart */}
      <path fillRule="evenodd" clipRule="evenodd" d="M575.661 73.7131C573.185 76.3311 569.677 77.975 565.776 77.975C558.281 77.975 552.205 71.942 552.205 64.5C552.205 57.058 558.281 51.025 565.776 51.025V26C544.453 26 527 43.3288 527 64.5C527 85.671 544.453 103 565.776 103C576.977 103 587.1 98.295 594 90.811L575.661 73.7131Z" fill={colors.bgMain}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M565 26V51.35C572.539 51.35 578.65 57.4613 578.65 65H604C604 43.5539 586.446 26 565 26Z" fill={colors.skyBlue}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M578.292 64C578.292 68.4007 576.219 72.3124 573 74.8381L588.838 95C598.057 87.782 604 76.5928 604 64H578.292Z" fill={colors.vermillion}/>
      
      {/* Persona Illustration: Vishnu */}
      <path fillRule="evenodd" clipRule="evenodd" d="M320.303 195.247C327.437 199.558 334.446 201.641 337.736 200.791C345.986 198.659 346.744 168.401 340.361 156.472C333.977 144.543 301.162 139.344 299.508 162.978C298.933 171.181 302.369 178.502 307.445 184.475L298.343 227.005H324.781L320.303 195.247Z" fill={colors.skin}/>
      <circle cx="336.5" cy="168.5" r="4.75" stroke={colors.vermillion} strokeWidth="1.5"/>
      <path d="M341.693 166.632C341.965 166.476 342.261 166.364 342.572 166.303C342.669 166.284 342.758 166.271 342.838 166.261L342.897 166.748C342.82 166.756 342.743 166.765 342.666 166.779C342.451 166.821 342.245 166.894 342.051 166.991L341.693 166.632Z" stroke={colors.vermillion} strokeWidth="1.5"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M317.863 168.519C317.603 168.488 317.338 168.472 317.07 168.472C313.42 168.472 310.461 171.439 310.461 175.098C310.461 176.956 311.223 178.635 312.452 179.839C310.922 182.003 309.208 184.264 307.245 186.597C299.866 182.159 293.29 168.062 300.503 155.582C302.497 149.468 308.112 147.307 313.443 145.79C317.761 143.979 322.244 143.775 326.028 144.861C333.446 145.499 340.07 147.766 341.947 149.113C341.947 156.154 340.586 158.243 328.963 158.059C326.107 159.571 323.912 162.175 321.625 165.588C321.644 165.85 323.184 186.788 329.656 186.788C333.574 186.788 337.135 185.288 339.973 184.093C341.852 183.301 343.415 182.643 344.554 182.643C346.637 182.643 346.172 185.256 344.791 187.194C344.353 187.809 343.265 188.414 342.09 189.068C340.207 190.116 338.103 191.287 338.103 192.813C338.103 194.213 339.502 194.211 340.72 194.208C341.657 194.206 342.487 194.205 342.487 194.844C342.487 195.15 342.499 195.49 342.512 195.851C342.602 198.355 342.727 201.848 339.048 201.848C334.787 201.848 322.572 200.291 320.479 193.952C318.703 188.575 318.027 173.095 317.863 168.519Z" fill={colors.hair}/>
      
      {/* Chair */}
      <path fillRule="evenodd" clipRule="evenodd" d="M250.561 365.055H335.661L346.812 502H220.133L250.561 365.055Z" fill={colors.vermillion}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M250.561 365.055H276.734L292.4 502H220.133L250.561 365.055Z" fill={colors.black} fillOpacity="0.1"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M347.295 471.666C347.295 471.666 361.073 438.532 365.705 440.245C369.741 441.736 388.982 452.299 388.223 454.381C387.428 456.563 382.425 463.06 382.425 463.06C382.425 463.06 393.631 472.446 399.615 480.358C402.769 484.528 406.849 494.21 403.562 495.986C400.273 497.762 343.258 478.744 347.295 471.666Z" fill={colors.orange}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M417.337 499.433C417.11 488.895 417.236 470.952 420.705 470.63C424.989 470.235 446.892 471.46 447.101 473.666C447.32 475.98 450.001 486.211 450.001 486.211C450.001 486.211 465.249 487.636 474.047 492.193C478.685 494.595 481.019 501.572 478.815 504.594C476.611 507.616 416.984 515.069 417.587 506.939C417.587 506.939 417.43 503.831 417.337 499.433Z" fill={colors.orange}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M353.625 450.645C360.159 464.131 376.004 465.313 386.07 465.313C389.918 465.313 405.855 432.218 408.502 427.86C422.904 404.15 440.736 374.522 440.736 374.522C440.736 374.522 410.726 354.966 389.718 362.186C389.718 362.186 347.09 437.159 353.625 450.645Z" fill={colors.blue}/>
      
      {/* Persona's Body and Clothes */}
      <path fillRule="evenodd" clipRule="evenodd" d="M271.981 318.669C271.981 318.669 271.232 363.515 294.584 372.115C317.936 380.716 376.866 387.582 411.994 378.538C404.777 402.748 409.462 480.976 416.4 493.899C418.597 497.99 444.132 490.602 452.79 486.335C461.449 482.069 476.755 352.662 460.096 341.727C443.437 330.792 337.4 318.669 337.4 318.669H271.981Z" fill={colors.blue}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M418.062 330.416L382.923 304.547L375.156 323.797L409.952 338.264C419.792 349.853 425.294 354.685 426.46 352.758C427.441 351.133 426.675 349.612 425.967 348.212C425.417 347.12 424.902 346.102 425.28 345.164C426.145 343.021 432.755 343.248 439.019 343.73C445.283 344.213 443.458 341.419 441.948 340.039C435.553 336.202 427.591 332.995 418.062 330.416ZM233.79 375.998C237.018 369.432 248.011 305.44 248.011 305.44L271.031 305.531C271.031 305.531 249.71 374.534 248.011 378.756C245.804 384.241 249.553 392.209 252.096 397.613C252.489 398.449 252.854 399.223 253.163 399.918C249.635 401.5 247.94 399.587 246.154 397.571C244.135 395.292 242 392.883 236.974 395.226C235.031 396.133 233.194 397.203 231.398 398.25C225.197 401.864 219.499 405.184 211.749 400.389C210.52 399.629 209.174 396.768 212.427 394.531C220.532 388.96 232.212 379.208 233.79 375.998Z" fill={colors.skin}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M313.43 208.598L322.955 206.96C358.296 237.568 372.813 296.372 416.133 327.522L405.707 340.48C330.554 331.15 311.926 259.425 313.43 208.598Z" fill={colors.green}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M271.906 328.61C271.906 328.61 329.196 328.61 356.188 328.61C360.04 328.61 359.314 323.035 358.757 320.221C352.332 287.752 327.25 252.751 327.25 206.531L302.939 202.709C282.831 235.132 275.877 275.052 271.906 328.61Z" fill={colors.grayMedium}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M262.429 351.802C258.642 360.924 254.927 368.882 251.427 374.995H233.352C231.407 311.954 255.213 263.447 275.136 234.199C270.712 233.882 266.719 232.026 264.195 227.46C255.31 211.385 258.519 202.535 268.015 199.626C273.236 198.026 278.147 199.118 284.026 200.425C288.836 201.495 294.296 202.708 301.102 202.709C301.104 202.709 301.107 202.709 301.109 202.709C301.769 202.709 302.369 202.753 302.913 202.838L310.981 203.3C310.981 203.3 343.734 314.59 329.047 351.802H262.429Z" fill={colors.green}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M262.43 351.802C267.399 339.835 272.496 325.867 277.4 311.442C279.226 327.328 282.266 343.283 287.328 351.802H262.43Z" fill={colors.black} fillOpacity="0.1"/>
      
      {/* Background: Vertical Bar Chart */}
      <path d="M535 208C535 206.343 533.657 205 532 205C530.343 205 529 206.343 529 208V227C529 228.657 530.343 230 532 230C533.657 230 535 228.657 535 227V208Z" fill={colors.skyBlue}/>
      <path d="M549 192C549 190.343 547.657 189 546 189C544.343 189 543 190.343 543 192V227C543 228.657 544.343 230 546 230C547.657 230 549 228.657 549 227V192Z" fill={colors.skyBlue}/>
      <path d="M563 184C563 182.343 561.657 181 560 181C558.343 181 557 182.343 557 184V227C557 228.657 558.343 230 560 230C561.657 230 563 228.657 563 227V184Z" fill={colors.skyBlue}/>
      <path d="M577 192C577 190.343 575.657 189 574 189C572.343 189 571 190.343 571 192V227C571 228.657 572.343 230 574 230C575.657 230 577 228.657 577 227V192Z" fill={colors.skyBlue}/>
      <path d="M591 176C591 174.343 589.657 173 588 173C586.343 173 585 174.343 585 176V227C585 228.657 586.343 230 588 230C589.657 230 591 228.657 591 227V176Z" fill={colors.skyBlue}/>

      {/* Far Right: Circular Chart */}
      <path fillRule="evenodd" clipRule="evenodd" d="M604 148.516C604 132.285 617.053 119 633 119V148.516L613.181 170C607.544 164.748 604 157.042 604 148.516Z" fill={colors.bgMain}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M631.892 148H661C661 155.57 657.931 162.664 653.078 167.819C647.741 173.456 640.141 177 631.892 177C624.294 177 617.338 173.942 612 169.108L631.892 148Z" fill={colors.blue}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M662 148C662 132.053 648.947 119 633 119V148H662ZM618.5 119L630.1 145.1L604 133.5C606.581 126.734 612.377 121.581 618.5 119Z" fill={colors.purple}/>
      <rect x="316.375" y="167.375" width="15.25" height="0.75" fill={colors.black} stroke={colors.vermillion} strokeWidth="0.75"/>
    </svg>
  );
};

export default PersonaIllustration;
