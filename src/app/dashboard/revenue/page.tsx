import DateRangeSelector from "@/components/dashboard/revenue/date-range-selector";
import CitiesTable from "@/components/dashboard/world/cities-table";
import CountriesTable from "@/components/dashboard/world/countries-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RevenuePage = () => {
  return (
    <div className="flex w-full flex-col gap-4 px-4">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-green-600/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#16a34a"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹2350</div>
            <p className="text-xs text-muted-foreground">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Revenue per Country
            </CardTitle>
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-orange-600/20">
              <svg
                height="512"
                viewBox="0 0 24 24"
                width="512"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-muted-foreground"
              >
                <path
                  fill="#ea580c"
                  d="m20.48 8.301c.495 1.133.77 2.384.77 3.699 0 5.105-4.145 9.25-9.25 9.25s-9.25-4.145-9.25-9.25 4.145-9.25 9.25-9.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75c-5.933 0-10.75 4.817-10.75 10.75s4.817 10.75 10.75 10.75 10.75-4.817 10.75-10.75c0-1.529-.32-2.983-.896-4.301-.166-.379-.609-.552-.988-.386s-.552.608-.386.988z"
                ></path>
                <path
                  fill="#ea580c"
                  d="m17 1.25c-1.9 0-3.442 1.542-3.442 3.442 0 .594.269 1.317.685 2.023.835 1.421 2.227 2.815 2.227 2.815.293.293.767.293 1.06 0 0 0 1.392-1.394 2.227-2.815.416-.706.685-1.429.685-2.023 0-1.9-1.542-3.442-3.442-3.442zm0 1.5c1.072 0 1.942.87 1.942 1.942 0 .528-.393 1.177-.815 1.789-.377.546-.802 1.054-1.127 1.42-.325-.366-.75-.874-1.127-1.42-.422-.612-.815-1.261-.815-1.789 0-1.072.87-1.942 1.942-1.942z"
                ></path>
                <path
                  fill="#ea580c"
                  d="m1.603 12.636 3.27 2.044c.596.372 1.285.57 1.987.57h.76c.657 0 1.281.287 1.709.786l1.051 1.227c.492.574.663 1.356.456 2.082-.268.936-.557 1.949-.557 1.949-.114.398.117.813.515.927s.813-.117.927-.515c0 0 .289-1.013.557-1.949.346-1.21.061-2.514-.759-3.47-.343-.401-.721-.841-1.052-1.227-.712-.832-1.752-1.31-2.847-1.31h-.76c-.421 0-.834-.118-1.192-.342 0 0-3.271-2.044-3.271-2.044-.351-.219-.814-.113-1.033.239-.219.351-.113.814.239 1.033z"
                ></path>
                <path
                  fill="#ea580c"
                  d="m5.329 4.335s1.012 2.024 1.596 3.192c.353.707.993 1.227 1.757 1.429l1.758.465c.443.117.786.467.894.912l.753 3.087c.163.67.572 1.254 1.146 1.637l.466.31c.656.438 1.469.573 2.231.37.763-.202 1.401-.722 1.754-1.428 0 0 .575-1.151.575-1.151.164-.326.461-.565.815-.653 0-.001 2.791-.698 2.791-.698.401-.101.646-.508.545-.91-.1-.401-.507-.646-.909-.545l-2.791.697c-.778.195-1.433.72-1.792 1.438l-.576 1.151c-.16.321-.45.557-.797.649-.346.092-.716.031-1.014-.168l-.466-.31c-.261-.174-.447-.44-.521-.744l-.752-3.087c-.239-.979-.994-1.749-1.969-2.007l-1.758-.465c-.347-.092-.638-.328-.798-.65-.585-1.168-1.596-3.191-1.596-3.191-.185-.371-.636-.521-1.006-.336-.371.185-.521.636-.336 1.006z"
                ></path>
              </svg>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹945</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Revenue per City
            </CardTitle>
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-600/20">
              <svg
                height="16"
                width="16"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#2563eb"
                  d="M480.36,494.742h-14.382V43.146c0-4.767-3.864-8.629-8.629-8.629H296.27c-4.766,0-8.629,3.862-8.629,8.629v37.393
                  h-17.258V43.146c0-4.767-3.864-8.629-8.629-8.629H224.36V8.629c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629v25.888
                  h-37.393c-4.766,0-8.629,3.862-8.629,8.629v37.393h-25.888c-4.766,0-8.629,3.862-8.629,8.629v71.91h-71.91
                  c-4.766,0-8.629,3.862-8.629,8.629v325.034H31.64c-4.766,0-8.629,3.862-8.629,8.629S26.875,512,31.64,512H480.36
                  c4.766,0,8.629-3.862,8.629-8.629S485.125,494.742,480.36,494.742z M178.337,51.775h74.786v28.764h-74.786V51.775z
                  M149.573,494.742h-5.753V480.36c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629v14.382h-5.753v-28.764h28.764
                  V494.742z M207.101,273.258v14.845v206.639h-40.27v-37.393c0-4.767-3.864-8.629-8.629-8.629H112.18
                  c-4.766,0-8.629,3.862-8.629,8.629v37.393h-40.27V178.337h143.82V273.258z M215.73,161.079h-71.91V97.798h143.82v166.831H224.36
                  v-28.764h25.888c4.766,0,8.629-3.862,8.629-8.629s-3.864-8.629-8.629-8.629H224.36v-28.764h25.888
                  c4.766,0,8.629-3.862,8.629-8.629s-3.864-8.629-8.629-8.629H224.36v-2.876C224.36,164.941,220.496,161.079,215.73,161.079z
                  M368.18,494.742H224.36V288.103v-6.215h143.82V494.742z M448.719,494.742h-63.281V273.258v-11.506
                  c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629v2.876h-17.258v-2.876c0-4.767-3.864-8.629-8.629-8.629
                  s-8.629,3.862-8.629,8.629v2.876h-28.764V89.169V51.775h143.82V494.742z"
                ></path>
                <path
                  fill="#2563eb"
                  d="M261.753,477.485c4.766,0,8.629-3.864,8.629-8.629V307.778c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
				v161.079C253.124,473.622,256.987,477.485,261.753,477.485z"
                ></path>
                <path
                  fill="#2563eb"
                  d="M296.27,477.485c4.766,0,8.629-3.864,8.629-8.629V307.778c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
				v161.079C287.64,473.622,291.504,477.485,296.27,477.485z"
                ></path>
                <path
                  fill="#2563eb"
                  d="M330.786,477.485c4.766,0,8.629-3.864,8.629-8.629V307.778c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
				v161.079C322.157,473.622,326.021,477.485,330.786,477.485z"
                ></path>
                <path
                  fill="#2563eb"
                  d="M342.292,109.303c4.766,0,8.629-3.862,8.629-8.629V89.169c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
				v11.506C333.663,105.441,337.526,109.303,342.292,109.303z"
                ></path>
                <path
                  fill="#2563eb"
                  d="M376.809,109.303c4.766,0,8.629-3.862,8.629-8.629V89.169c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
				v11.506C368.18,105.441,372.043,109.303,376.809,109.303z"
                ></path>
                <path
                  fill="#2563eb"
                  d="M411.326,109.303c4.766,0,8.629-3.862,8.629-8.629V89.169c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
                  v11.506C402.697,105.441,406.56,109.303,411.326,109.303z"
                ></path>
                <path
                  fill="#2563eb"
                  d="M342.292,166.831c4.766,0,8.629-3.862,8.629-8.629v-11.506c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
				v11.506C333.663,162.969,337.526,166.831,342.292,166.831z"
                ></path>
                <path
                  fill="#2563eb"
                  d="M376.809,166.831c4.766,0,8.629-3.862,8.629-8.629v-11.506c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
				v11.506C368.18,162.969,372.043,166.831,376.809,166.831z"
                ></path>
                <path
                  fill="#2563eb"
                  d="M411.326,166.831c4.766,0,8.629-3.862,8.629-8.629v-11.506c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
				v11.506C402.697,162.969,406.56,166.831,411.326,166.831z"
                ></path>
                <path
                  fill="#2563eb"
                  d="M342.292,224.36c4.766,0,8.629-3.862,8.629-8.629v-11.506c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
				v11.506C333.663,220.497,337.526,224.36,342.292,224.36z"
                ></path>
                <path
                  fill="#2563eb"
                  d="M376.809,224.36c4.766,0,8.629-3.862,8.629-8.629v-11.506c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
				v11.506C368.18,220.497,372.043,224.36,376.809,224.36z"
                ></path>
                <path
                  fill="#2563eb"
                  d="M411.326,224.36c4.766,0,8.629-3.862,8.629-8.629v-11.506c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
                  v11.506C402.697,220.497,406.56,224.36,411.326,224.36z"
                ></path>
                <path
                  fill="#2563eb"
                  d="M100.674,247.371c4.766,0,8.629-3.862,8.629-8.629v-11.506c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
                  v11.506C92.045,243.508,95.909,247.371,100.674,247.371z"
                ></path>
                <path
                  fill="#2563eb"
                  d="M135.191,247.371c4.766,0,8.629-3.862,8.629-8.629v-11.506c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
                  v11.506C126.562,243.508,130.425,247.371,135.191,247.371z"
                ></path>
                <path
                  fill="#2563eb"
                  d="M169.708,247.371c4.766,0,8.629-3.862,8.629-8.629v-11.506c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
				v11.506C161.079,243.508,164.942,247.371,169.708,247.371z"
                ></path>
                <path
                  fill="#2563eb"
                  d="M100.674,304.899c4.766,0,8.629-3.862,8.629-8.629v-11.506c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
                  v11.506C92.045,301.036,95.909,304.899,100.674,304.899z"
                ></path>
                <path
                  fill="#2563eb"
                  d="M135.191,304.899c4.766,0,8.629-3.862,8.629-8.629v-11.506c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
                  v11.506C126.562,301.036,130.425,304.899,135.191,304.899z"
                ></path>
                <path
                  fill="#2563eb"
                  d="M169.708,304.899c4.766,0,8.629-3.862,8.629-8.629v-11.506c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
                  v11.506C161.079,301.036,164.942,304.899,169.708,304.899z"
                ></path>
                <path
                  fill="#2563eb"
                  d="M100.674,362.427c4.766,0,8.629-3.862,8.629-8.629v-11.506c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
				v11.506C92.045,358.565,95.909,362.427,100.674,362.427z"
                ></path>
                <path
                  fill="#2563eb"
                  d="M135.191,362.427c4.766,0,8.629-3.862,8.629-8.629v-11.506c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
				v11.506C126.562,358.565,130.425,362.427,135.191,362.427z"
                ></path>
                <path
                  fill="#2563eb"
                  d="M169.708,362.427c4.766,0,8.629-3.862,8.629-8.629v-11.506c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
                  v11.506C161.079,358.565,164.942,362.427,169.708,362.427z"
                ></path>
                <path
                  fill="#2563eb"
                  d="M100.674,419.955c4.766,0,8.629-3.862,8.629-8.629V399.82c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
                  v11.506C92.045,416.093,95.909,419.955,100.674,419.955z"
                ></path>
                <path
                  fill="#2563eb"
                  d="M135.191,419.955c4.766,0,8.629-3.862,8.629-8.629V399.82c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
                  v11.506C126.562,416.093,130.425,419.955,135.191,419.955z"
                ></path>
                <path
                  fill="#2563eb"
                  d="M169.708,419.955c4.766,0,8.629-3.862,8.629-8.629V399.82c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
                  v11.506C161.079,416.093,164.942,419.955,169.708,419.955z"
                ></path>
                <path
                  fill="#2563eb"
                  d="M411.326,281.888c4.766,0,8.629-3.862,8.629-8.629v-11.506c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
                  v11.506C402.697,278.025,406.56,281.888,411.326,281.888z"
                ></path>
                <path
                  fill="#2563eb"
                  d="M411.326,339.416c4.766,0,8.629-3.862,8.629-8.629v-11.506c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
				v11.506C402.697,335.553,406.56,339.416,411.326,339.416z"
                ></path>
                <path
                  fill="#2563eb"
                  d="M411.326,396.944c4.766,0,8.629-3.862,8.629-8.629v-11.506c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
				v11.506C402.697,393.081,406.56,396.944,411.326,396.944z"
                ></path>
                <path
                  fill="#2563eb"
                  d="M411.326,454.472c4.766,0,8.629-3.862,8.629-8.629v-11.506c0-4.767-3.864-8.629-8.629-8.629s-8.629,3.862-8.629,8.629
                  v11.506C402.697,450.609,406.56,454.472,411.326,454.472z"
                ></path>
                <path
                  fill="#2563eb"
                  d="M258.876,135.191c0-4.767-3.864-8.629-8.629-8.629h-69.034c-4.766,0-8.629,3.862-8.629,8.629
                  c0,4.767,3.864,8.629,8.629,8.629h69.034C255.013,143.82,258.876,139.958,258.876,135.191z"
                ></path>
              </svg>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹228</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="flex w-full flex-col gap-4">
        {/* Date range selection to get the revenue data */}
        <DateRangeSelector />
      </div>
    </div>
  );
};

export default RevenuePage;
