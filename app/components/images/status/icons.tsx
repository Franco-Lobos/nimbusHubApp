export const SunIcon: React.FC<{ containerProps?:any, sunClasses?:string, coreSunClasses?:string}> = ({containerProps, sunClasses, coreSunClasses}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox=" 85 100 10 65" height="40" width="40" {...containerProps}>
        <g transform="translate(0, 0)">
            <path d="M236.84252,386a12,12,0,1,1,12-12A12.01375,12.01375,0,0,1,236.84252,386Zm0-22a10,10,0,1,0,10,10A10.0113,10.0113,0,0,0,236.84252,364Z" transform="translate(-148.09252 -240.5)" fill="gold" className={coreSunClasses} />
            <path d="M236.44872,359a1,1,0,0,1-1-1V346.5a1,1,0,0,1,2,0V358A1,1,0,0,1,236.44872,359Z" transform="translate(-148.09252 -240.5)" fill="gold" className={sunClasses}/>
            <path d="M220.84252,374.60645h-11.5a1,1,0,0,1,0-2h11.5a1,1,0,1,1,0,2Z" transform="translate(-148.09252 -240.5)" fill="gold" className={sunClasses}/>
            <path d="M262.84252,374.60645h-11.5a1,1,0,0,1,0-2h11.5a1,1,0,0,1,0,2Z" transform="translate(-148.09252 -240.5)" fill="gold" className={sunClasses}/>
            <path d="M251.0266,363.67236a1,1,0,0,1-.69629-1.71777l4.81592-4.67236a1,1,0,0,1,1.39258,1.43554l-4.81592,4.67237A.99626.99626,0,0,1,251.0266,363.67236Z" transform="translate(-148.09252 -240.5)" fill="gold" className={sunClasses}/>
            <path d="M221.65844,363.67236a.99668.99668,0,0,1-.69629-.28222l-4.81592-4.67237a1,1,0,1,1,1.39258-1.43554l4.81592,4.67236a1,1,0,0,1-.69629,1.71777Z" transform="translate(-148.09252 -240.5)" fill="gold" className={sunClasses}/>
            <path d="M217.84252,391a1.00025,1.00025,0,0,1-.71753-1.69678l4.81592-4.95947a1.00017,1.00017,0,0,1,1.43506,1.39355l-4.81592,4.95948A.99855.99855,0,0,1,217.84252,391Z" transform="translate(-148.09252 -240.5)" fill="gold" className={sunClasses}/>
            <path d="M256.84252,392a.995.995,0,0,1-.71558-.30176l-5.81591-5.95947a.99979.99979,0,1,1,1.43115-1.39648l5.81592,5.95947A.99975.99975,0,0,1,256.84252,392Z" transform="translate(-148.09252 -240.5)" fill="gold" className={sunClasses}/>
            <path d="M236.44872,402a1,1,0,0,1-1-1V389.5a1,1,0,0,1,2,0V401A1,1,0,0,1,236.44872,402Z" transform="translate(-148.09252 -240.5)" fill="gold" className={sunClasses}/>
        </g>
    </svg>
)

export const CloudIcon: React.FC<{ containerProps?:any, cloudClasses?:string}> = ({containerProps, cloudClasses}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox=" 195 100 10 65" height="40" width="40" {...containerProps} >
        <g transform="translate(0, 0)">
            <path d="M367.25609,393H333.87426a13.00186,13.00186,0,0,1,0-26h2.553a15.70676,15.70676,0,0,1,14.13794-9,15.866,15.866,0,0,1,15.697,15h.99389a10.00136,10.00136,0,0,1,0,20Zm-33.38183-24a11.00221,11.00221,0,0,0,0,22h33.38183a8.00171,8.00171,0,0,0,0-16h-1.96362a1,1,0,0,1-1-1,13.88125,13.88125,0,0,0-13.72729-14,13.72466,13.72466,0,0,0-12.57471,8.39453,1.00022,1.00022,0,0,1-.91895.60547Z" transform="translate(-148.09252 -240.5)" fill="#323232" className={cloudClasses}/>
        
        </g>    
    </svg>
)

export const CloudSunIcon: React.FC<{ containerProps?:any, cloudClasses?:string, sunClasses?:string}> = ({containerProps, cloudClasses, sunClasses}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox=" 310 100 10 65" height="40" width="40" {...containerProps} >
    <g transform="translate(0, 0)">
        <path d="M478.76391,374.05664l-.7793-1.8418A10.002,10.002,0,1,0,464.84423,359.188l-1.84863-.7627a12.0019,12.0019,0,1,1,15.76831,15.63135Z" transform="translate(-148.09252 -240.5)" fill="gold" className={sunClasses}/>
    <path d="M480.25609,393H446.87426a13.00186,13.00186,0,0,1,0-26h2.553a15.70676,15.70676,0,0,1,14.13794-9,15.866,15.866,0,0,1,15.697,15h.99389a10.00136,10.00136,0,0,1,0,20Zm-33.38183-24a11.00221,11.00221,0,0,0,0,22h33.38183a8.00171,8.00171,0,0,0,0-16h-1.96362a1,1,0,0,1-1-1,13.88125,13.88125,0,0,0-13.72729-14,13.72466,13.72466,0,0,0-12.57471,8.39453,1.00022,1.00022,0,0,1-.91895.60547Z" transform="translate(-148.09252 -240.5)" fill="orange" className={cloudClasses}/>
    </g>    
</svg>
)


export const RainIcon: React.FC<{ containerProps?:any,  cloudClasses?:string, waterClasses?:string}> = ({containerProps, cloudClasses, waterClasses}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox=" 422 100 10 65" height="40" width="40" {...containerProps}>
    <g transform="translate(0, 0)">
             <path d="M593.25609,388h-4.01391a1,1,0,0,1,0-2h4.01391a8.00171,8.00171,0,0,0,0-16h-1.96362a1,1,0,0,1-1-1,13.88125,13.88125,0,0,0-13.72729-14,13.72466,13.72466,0,0,0-12.57471,8.39453,1.00022,1.00022,0,0,1-.91895.60547h-3.19726a11.00221,11.00221,0,0,0,0,22h3.1001a1,1,0,0,1,0,2h-3.1001a13.00186,13.00186,0,0,1,0-26h2.553a15.70676,15.70676,0,0,1,14.13794-9,15.866,15.866,0,0,1,15.697,15h.99389a10.00136,10.00136,0,0,1,0,20Z" transform="translate(-148.09252 -240.5)" fill="#323232" className={cloudClasses}/>
        <path d="M576.39965,392.31689a1,1,0,0,1-1-1v-11.5a1,1,0,1,1,2,0v11.5A1.00005,1.00005,0,0,1,576.39965,392.31689Z" transform="translate(-148.09252 -240.5)" className={waterClasses}/>
        <path d="M569.39965,398.31689a1,1,0,0,1-1-1v-11.5a1,1,0,1,1,2,0v11.5A1.00005,1.00005,0,0,1,569.39965,398.31689Z" transform="translate(-148.09252 -240.5)" className={waterClasses}/>
        <path d="M583.39965,401.31689a1,1,0,0,1-1-1v-11.5a1,1,0,1,1,2,0v11.5A1.00005,1.00005,0,0,1,583.39965,401.31689Z" transform="translate(-148.09252 -240.5)" className={waterClasses}/>
        
        </g>    
    </svg>
)

export const SnowIcon: React.FC<{ containerProps?:any, cloudClasses?:string,snowClasses?:string }> = ({containerProps, cloudClasses, snowClasses}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox=" 535 100 10 65" height="40" width="40" {...containerProps} >
    <g transform="translate(0, 0)">
  <path d="M706.25609,388h-4.01391a1,1,0,0,1,0-2h4.01391a8.00171,8.00171,0,0,0,0-16h-1.96362a1,1,0,0,1-1-1,13.88125,13.88125,0,0,0-13.72729-14,13.72466,13.72466,0,0,0-12.57471,8.39453,1.00022,1.00022,0,0,1-.91895.60547h-3.19726a11.00221,11.00221,0,0,0,0,22h3.1001a1,1,0,1,1,0,2h-3.1001a13.00186,13.00186,0,0,1,0-26h2.553a15.70676,15.70676,0,0,1,14.13794-9,15.866,15.866,0,0,1,15.697,15h.99389a10.00136,10.00136,0,0,1,0,20Z" transform="translate(-148.09252 -240.5)" fill="#323232" className={cloudClasses}/>
        <circle cx="539.75" cy="142.75" r="2.25" className={snowClasses}/>
        <circle cx="547.25" cy="145.75" r="2.25" className={snowClasses}/>
        <circle cx="534.75" cy="149.25" r="2.25" className={snowClasses}/>
        <circle cx="542.75" cy="154.25" r="2.25" className={snowClasses}/>
        </g>    
    </svg>
)