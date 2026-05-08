import { AccountAccess } from "@/islands/demo/components/account-access.tsx"
import { CardOverview } from "@/islands/demo/components/card-overview.tsx"
import { ClaimableBalance } from "@/components/demo/components/claimable-balance.tsx"
import { ContributionHistory } from "@/islands/demo/components/contribution-history.tsx"
import { CoverArt } from "@/components/demo/components/cover-art.tsx"
import { DividendIncome } from "@/islands/demo/components/dividend-income.tsx"
import { EmptyConnectBank } from "@/components/demo/components/empty-connect-bank.tsx"
import { EmptyDistributeTrack } from "@/components/demo/components/empty-distribute-track.tsx"
import { EmptyExploreCatalog } from "@/components/demo/components/empty-explore-catalog.tsx"
import { Faq } from "@/islands/demo/components/faq.tsx"
import { FrontDoor } from "@/components/demo/components/front-door.tsx"
import { IndexInvesting } from "@/components/demo/components/index-investing.tsx"
import { KitchenIsland } from "@/islands/demo/components/kitchen-island.tsx"
import { LoadingCard } from "@/components/demo/components/loading-card.tsx"
import { NewMilestone } from "@/islands/demo/components/new-milestone.tsx"
import { NotificationSettings } from "@/islands/demo/components/notification-settings.tsx"
import { Payments } from "@/islands/demo/components/payments.tsx"
import { PayoutThreshold } from "@/islands/demo/components/payout-threshold.tsx"
import { PowerUsage } from "@/islands/demo/components/power-usage.tsx"
import { Preferences } from "@/components/demo/components/preferences.tsx"
import { QrConnect } from "@/islands/demo/components/qr-connect.tsx"
import { ReceivingMethod } from "@/islands/demo/components/receiving-method.tsx"
import { RecentTransactions } from "@/islands/demo/components/recent-transactions.tsx"
import { ReleaseCatalog } from "@/islands/demo/components/release-catalog.tsx"
import { RollerShades } from "@/islands/demo/components/roller-shades.tsx"
import { SavingsProgress } from "@/islands/demo/components/savings-progress.tsx"
import { SavingsTargets } from "@/components/demo/components/savings-targets.tsx"
import { SidebarNav } from "@/islands/demo/components/sidebar-nav.tsx"
import { SocialLinks } from "@/components/demo/components/social-links.tsx"
import { StockPerformance } from "@/islands/demo/components/stock-performance.tsx"
import { SyncingState } from "@/components/demo/components/syncing-state.tsx"
import { TransferFunds } from "@/components/demo/components/transfer-funds.tsx"
import { UpcomingPayments } from "@/islands/demo/components/upcoming-payments.tsx"

export default function Preview02Example() {
  return (
    <div className="overflow-x-auto overflow-y-hidden bg-muted contain-[paint] [--gap:--spacing(4)] 3xl:[--gap:--spacing(12)] md:[--gap:--spacing(10)] dark:bg-background">
      <div className="flex w-full min-w-max justify-center">
        <div
          className="grid w-[2400px] grid-cols-7 items-start gap-(--gap) bg-muted p-(--gap) md:w-[3000px] dark:bg-background *:[div]:gap-(--gap)"
          data-slot="capture-target"
        >
          <div className="flex flex-col p-1 [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
            <ContributionHistory />
            <EmptyDistributeTrack />
            <QrConnect />
            <DividendIncome />
            <IndexInvesting />
            <SyncingState />
          </div>
          <div className="flex flex-col p-1 [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
            <PayoutThreshold />
            <ClaimableBalance />
            <Preferences />
            <SavingsProgress />
            <KitchenIsland />
          </div>
          <div className="col-span-2 flex flex-col p-1 [contain-intrinsic-size:760px_1200px] [content-visibility:auto]">
            <SavingsTargets />
            <RecentTransactions />
            <div className="grid grid-cols-2 items-start gap-(--gap)">
              <div className="flex flex-col gap-(--gap)">
                <SidebarNav />
                <Faq />
              </div>
              <div className="flex flex-col gap-(--gap)">
                <Payments />
                <FrontDoor />
              </div>
            </div>
            <ReleaseCatalog />
          </div>
          <div className="flex flex-col p-1 [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
            <AccountAccess />
            <CardOverview />
            <TransferFunds />
            <CoverArt />
            <LoadingCard />
          </div>
          <div className="flex flex-col p-1 [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
            <ReceivingMethod />
            <PowerUsage />
            <EmptyConnectBank />
            <UpcomingPayments />
            <RollerShades />
          </div>
          <div className="flex flex-col p-1 [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
            <StockPerformance />
            <EmptyExploreCatalog />
            <NewMilestone />
            <SocialLinks />
            <NotificationSettings />
          </div>
        </div>
      </div>
    </div>
  )
}
