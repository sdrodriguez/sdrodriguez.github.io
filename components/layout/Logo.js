import React from 'react';

const Logo = () => {
    return ( <svg className="h-9 fill-current inline px-1" viewBox="0 0 725 818" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="725" height="818" fill="url(#pattern0)"/>
    <path d="M345.977 379.286C285.982 360.23 285.607 338.63 292.919 330.213C290.519 328.493 285.419 337.616 283.169 342.392C280.919 372.48 301.73 392.719 308.293 396.122C314.855 399.525 338.103 422.808 334.541 420.3C331.691 418.294 326.604 419.464 324.416 420.3C339.79 445.374 338.103 445.553 338.103 459.702C338.103 473.851 354.227 476.896 358.164 478.15C362.101 479.403 388.537 476.538 387.6 459.702C386.85 446.234 396.412 431.763 401.286 426.21C402.161 424.957 403.386 422.02 401.286 420.3C399.186 418.581 394.537 419.584 392.474 420.3C392.474 414.39 420.973 390.57 426.597 387.704C431.097 385.411 437.846 373.376 440.659 367.645C444.558 340.565 439.034 331.407 435.784 330.213C445.233 354.284 403.224 372.958 381.038 379.286C402.486 390.319 405.224 398.689 403.911 401.495C401.536 401.495 393.112 403.93 378.413 413.673C360.039 425.852 373.538 437.136 378.413 437.136C382.313 437.136 383.288 452.18 383.288 459.702C382.663 458.448 380.813 454.938 378.413 450.926C376.013 446.914 367.414 453.852 363.414 457.195C365.664 460.956 357.377 453.935 354.227 450.926C351.077 447.917 345.665 455.523 343.353 459.702C344.29 447.523 345.977 438.031 351.602 437.136C356.102 436.419 357.852 429.554 358.164 426.21C358.164 409.912 324.416 409.554 321.792 401.495C319.692 395.047 337.041 384.003 345.977 379.286Z" fill="#010007" stroke="#C1FFCB" strokeOpacity="0.44"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M362.851 488C369.271 488 374.475 483.269 374.475 477.433C374.475 471.597 369.271 466.866 362.851 466.866C356.431 466.866 351.227 471.597 351.227 477.433C351.227 483.269 356.431 488 362.851 488ZM362.851 485.851C368.148 485.851 372.441 482.082 372.441 477.433C372.441 472.784 368.148 469.015 362.851 469.015C357.555 469.015 353.261 472.784 353.261 477.433C353.261 482.082 357.555 485.851 362.851 485.851Z" fill="#010007"/>
    <path d="M369.413 471.165C367.226 469.553 361.539 467.296 356.289 471.165C358.914 470.329 365.213 469.159 369.413 471.165Z" fill="white" stroke="white"/>
    <defs>
    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use href="#image0" transform="scale(0.00137931 0.00122249)"/>
    </pattern>
    <image id="image0" width="725" height="818" href="data:image/png;base64,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"/>
    </defs>
    </svg> );
}
 
export default Logo;