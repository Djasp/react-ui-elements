import React from 'react';

class EmptyStateIcon extends React.PureComponent {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="72">
        <g fill="none" fillRule="evenodd">
          <path fill="#D8D9DA" fillRule="nonzero" d="M44.68 49.92c.221.12.43.275.616.465l1.731 1.762.978.995a3.511 3.511 0 0 1 2.41 1.058l11.421 11.626a3.664 3.664 0 0 1 0 5.115 3.51 3.51 0 0 1-5.025 0L45.389 59.315a3.636 3.636 0 0 1-1.039-2.453l-.978-.995-1.73-1.761a2.637 2.637 0 0 1-.458-.628A24.877 24.877 0 0 1 7.38 51.785c-9.84-10.016-9.84-26.256 0-36.273a24.887 24.887 0 0 1 35.637 0c9.25 9.417 9.805 24.333 1.662 34.408zm2.08 8l11.42 11.626c.63.641 1.654.642 2.285 0 .63-.641.63-1.683 0-2.325L49.044 55.595a1.596 1.596 0 0 0-2.285 0 1.667 1.667 0 0 0 0 2.325zm-5.114-7.53c9.084-9.246 9.084-24.237 0-33.483a22.973 22.973 0 0 0-32.895 0c-9.084 9.246-9.084 24.237 0 33.483a22.973 22.973 0 0 0 32.895 0zm-2.513-2.558a19.463 19.463 0 0 1-27.87 0c-7.695-7.833-7.695-20.534 0-28.367a19.463 19.463 0 0 1 27.87 0c7.696 7.833 7.696 20.534 0 28.367zm-1.37-1.395c6.938-7.063 6.938-18.514 0-25.577a17.549 17.549 0 0 0-25.128 0c-6.94 7.063-6.94 18.514 0 25.577a17.549 17.549 0 0 0 25.128 0zm5.249 6.273l1.73 1.762.914-.93-1.73-1.762a.64.64 0 0 0-.916-.002.666.666 0 0 0 .002.932zm-17.855-6.609c6.78 0 12.276-5.594 12.276-12.495 0-.545.434-.987.969-.987a.98.98 0 0 1 .97.987c0 7.99-6.365 14.468-14.215 14.468a.978.978 0 0 1-.97-.986c0-.545.434-.987.97-.987zm32.92-11.18c.714 0 1.293-.589 1.293-1.315s-.579-1.315-1.292-1.315c-.714 0-1.293.589-1.293 1.315s.579 1.315 1.293 1.315zm5.816 0c.713 0 1.292-.589 1.292-1.315s-.579-1.315-1.292-1.315c-.714 0-1.293.589-1.293 1.315s.579 1.315 1.293 1.315zm5.815 0c.713 0 1.292-.589 1.292-1.315s-.579-1.315-1.292-1.315c-.714 0-1.292.589-1.292 1.315s.578 1.315 1.292 1.315z"/>
          <path fill="#FF9D2A" d="M66.536 17L63.5 20.036 60.464 17H53.5a8.5 8.5 0 1 1 0-17h18a8.5 8.5 0 1 1 0 17h-4.964zM56.242 8.592c0 .693-.128 1.307-.385 1.84a2.85 2.85 0 0 1-1.096 1.234 3.052 3.052 0 0 1-1.62.432c-.605 0-1.142-.14-1.61-.418a2.846 2.846 0 0 1-1.097-1.194c-.262-.517-.4-1.111-.412-1.782v-.4c0-.697.128-1.311.383-1.844a2.844 2.844 0 0 1 1.099-1.232 3.074 3.074 0 0 1 1.628-.435c.602 0 1.14.143 1.611.43.472.286.84.694 1.102 1.223.262.529.394 1.135.397 1.819v.327zM54.5 8.294c0-.706-.118-1.243-.354-1.609a1.135 1.135 0 0 0-1.013-.55c-.86 0-1.313.645-1.362 1.934l-.005.523c0 .696.116 1.232.347 1.606.23.375.574.562 1.03.562a1.12 1.12 0 0 0 1-.552c.235-.368.354-.897.357-1.587v-.327zm2.244 1.016c0-.528.103-.997.308-1.41a2.2 2.2 0 0 1 .883-.949c.385-.221.835-.332 1.353-.332.791 0 1.414.245 1.87.735.456.49.684 1.156.684 2v.058c0 .824-.229 1.477-.686 1.96-.458.484-1.077.726-1.858.726-.752 0-1.356-.226-1.812-.677-.455-.45-.701-1.062-.737-1.833l-.005-.278zm1.646.102c0 .488.076.846.23 1.074.152.228.378.342.678.342.586 0 .885-.45.898-1.352V9.31c0-.948-.303-1.421-.908-1.421-.55 0-.848.408-.894 1.225l-.004.298zm8.982-.015c0 .82-.185 1.476-.555 1.966-.37.49-.868.735-1.496.735-.485 0-.884-.178-1.196-.533v2.466h-1.646V6.717h1.538l.049.488c.316-.39.73-.586 1.245-.586.651 0 1.157.24 1.519.72.36.48.542 1.14.542 1.98v.078zm-1.646-.102c0-.938-.273-1.406-.82-1.406-.39 0-.651.14-.781.42v2.08c.143.293.406.44.79.44.525 0 .795-.453.811-1.358v-.176zm5.037 1.22c0-.14-.073-.252-.22-.336-.146-.085-.425-.173-.835-.264a3.807 3.807 0 0 1-1.015-.359 1.701 1.701 0 0 1-.61-.54 1.288 1.288 0 0 1-.21-.727c0-.485.2-.885.6-1.199.4-.314.924-.47 1.572-.47.697 0 1.257.157 1.68.473.423.316.634.73.634 1.245h-1.65c0-.423-.223-.635-.669-.635a.663.663 0 0 0-.434.144.446.446 0 0 0-.176.36c0 .146.071.264.215.355.143.092.372.167.686.225.314.059.59.129.827.21.795.274 1.192.763 1.192 1.47 0 .482-.214.874-.642 1.177-.428.302-.983.454-1.663.454a2.88 2.88 0 0 1-1.21-.244 2.025 2.025 0 0 1-.831-.665 1.504 1.504 0 0 1-.298-.883h1.538c.007.244.088.422.244.534.157.113.357.169.601.169.225 0 .393-.046.505-.137a.437.437 0 0 0 .169-.356zm3.89-.766h-1.334l-.21-4.858h1.753l-.21 4.858zm-1.593 1.514c0-.241.087-.439.262-.594a.946.946 0 0 1 .651-.232.95.95 0 0 1 .652.232.758.758 0 0 1 .261.594c0 .24-.087.438-.26.593a.946.946 0 0 1-.653.232.946.946 0 0 1-.651-.232.758.758 0 0 1-.262-.593z"/>
        </g>
      </svg>
    )
  }
}

export default EmptyStateIcon;
