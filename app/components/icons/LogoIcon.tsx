const LogoIcon: React.FC<{ numbProps?: any}> = ({numbProps ={className:"fill-blue"}}) => (
    <svg width="20" height="50" viewBox="0 0 20 10" {...numbProps} >
    <g transform="matrix(0.2,0,0,0.2,0,-4)" >
        <path xmlns="http://www.w3.org/2000/svg"  d="M81.288,47.982c0-0.001,0-0.002,0.001-0.002c0.021-0.187,0.034-0.375,0.046-0.564c0-0.004,0-0.009,0-0.013  c0.011-0.194,0.017-0.39,0.017-0.586c0-6.113-5.078-11.068-11.342-11.068c-6.263,0-11.342,4.955-11.342,11.068  c0,0.161,0.005,0.321,0.012,0.479c0.006,0.069,0.01,0.137,0.014,0.206c0.005,0.076,0.011,0.152,0.019,0.229  c0.017,0.199,0.037,0.396,0.063,0.591c0.002,0.005,0.002,0.009,0.002,0.013c-0.15-0.775-0.229-1.578-0.229-2.4  c0-5.579,3.649-10.265,8.58-11.581c-1.676-7.807-8.612-13.66-16.92-13.66c-8.749,0-15.977,6.489-17.144,14.916  c-1.459-0.632-3.067-0.984-4.759-0.984c-6.262,0-11.398,4.806-11.929,10.93c3.486-0.817,7.415-1.278,11.569-1.278  c13.179,0,24.073,4.626,25.84,10.638c-3.215-4.57-13.391-7.908-25.449-7.908C13.697,47.008,1.827,51.93,1.827,58  s11.87,10.994,26.509,10.994c9.019,0,16.983-1.869,21.772-4.723c3.309-0.056,6.352-0.459,8.832-1.109  c4.051,0.877,8.896,1.387,14.102,1.387c14.23,0,25.764-3.809,25.764-8.506C98.805,52.295,91.471,49.117,81.288,47.982z">
        </path>
    </g>
</svg>
  );

export default LogoIcon;